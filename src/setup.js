import { mkdir, copyFile, chmod } from 'node:fs/promises'; // Import file system promises for async operations
import { access, constants } from 'node:fs'; // Import access and constants for file existence checks
import { spawn } from 'node:child_process'; // Import spawn to execute shell commands
import path from 'node:path'; // Import path for file and directory path manipulations
import { fileURLToPath } from 'node:url'; // Import fileURLToPath to convert file URLs to paths

// Polyfill for __dirname (not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if a file or directory exists
async function pathExists(filePath) {
  try {
    await access(filePath, constants.F_OK); // Check if the file is accessible
    return true; // File exists
  } catch {
    return false; // File does not exist
  }
}

// Function to copy a file and create a backup if the destination file already exists
async function copyWithBackup(src, dest) {
  // Ensure the destination directory exists
  await mkdir(path.dirname(dest), { recursive: true });
  
  // If the destination file exists, create a backup
  if (await pathExists(dest)) {
    const backupPath = `${dest}.bak`; // Backup file path
    console.warn(`⚠️  Backup existing ${path.basename(dest)} → ${backupPath}`);
    await copyFile(dest, backupPath); // Copy the existing file to the backup location
  }
  
  // Copy the source file to the destination
  await copyFile(src, dest);
}

// Configuration files to be copied from the templates directory to the user's project
const CONFIG_FILES = [
  { src: '.prettierrc', dest: '.prettierrc' },
  { src: 'eslint.config.js', dest: 'eslint.config.js' },
  { src: '.husky/pre-commit', dest: '.husky/pre-commit' },
  { src: '.husky/pre-push', dest: '.husky/pre-push' },
];

// List of required development dependencies to be installed
const REQUIRED_DEPS = [
  '@eslint/js@^9.23.0',
  'eslint@^9.23.0',
  'eslint-config-prettier@^10.1.1',
  'eslint-plugin-prettier@^5.2.6',
  'globals@^16.0.0',
  'husky@^9.1.7',
  'lint-staged@^15.5.0',
  'prettier@^3.5.3',
];

// Main function to set up the project
async function setupProject() {
  try {
    const templatesDir = path.join(__dirname, 'templates'); // Path to the templates directory
    const userDir = process.cwd(); // Current working directory of the user's project

    // Step 1: Install required dependencies
    console.log('📦 Installing required dependencies...');
    await new Promise((resolve, reject) => {
      const npmProcess = spawn(
        'npm',
        ['install', '-D', ...REQUIRED_DEPS], // Install dependencies as devDependencies
        { 
          stdio: 'inherit', // Inherit standard input/output streams for real-time logging
          cwd: userDir, // Run the command in the user's project directory
          shell: true // Use the shell to execute the command
        }
      );

      // Resolve the promise if the process exits successfully
      npmProcess.on('close', (code) => {
        code === 0 ? resolve() : reject(new Error(`npm install failed with code ${code}`));
      });
      
      // Reject the promise if an error occurs
      npmProcess.on('error', reject);
    });

    // Step 2: Copy configuration files
    console.log('⚡ Setting up configuration files...');
    for (const file of CONFIG_FILES) {
      const srcPath = path.join(templatesDir, file.src); // Source file path in the templates directory
      const destPath = path.join(userDir, file.dest); // Destination file path in the user's project
      await copyWithBackup(srcPath, destPath); // Copy the file with backup handling
    }

    // Step 3: Set permissions for Git hooks (only on non-Windows platforms)
    console.log('🔧 Configuring Git hooks...');
    if (process.platform !== 'win32') {
      const preCommitPath = path.join(userDir, '.husky/pre-commit'); // Path to the pre-commit hook
      const prePushPath = path.join(userDir, '.husky/pre-push'); // Path to the pre-push hook
      await chmod(preCommitPath, 0o755); // Make the pre-commit hook executable
      await chmod(prePushPath, 0o755); // Make the pre-push hook executable
    }

    // Success message
    console.log('\n✅ Setup successful! Features enabled:');
    console.log('- ESLint + Prettier code quality');
    console.log('- Automatic pre-commit formatting');
    console.log('- Pre-push quality checks\n');

  } catch (error) {
    // Error handling and troubleshooting tips
    console.error('\n❌ Setup failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('- Delete node_modules and retry');
    console.log('- Check file permissions');
    process.exit(1); // Exit the process with an error code
  }
}

// Export the setup function for external use
export { setupProject as setupConfigs };

// Execute the setup function if the script is run directly
if (import.meta.url === `file://${process.argv[1]}`) { 
  await setupProject();
}