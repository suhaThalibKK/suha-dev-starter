import fs from 'fs-extra';
import path from 'path';
import { execa } from 'execa';
import { fileURLToPath } from 'url';

// Polyfill for __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Updated configuration files
const CONFIG_FILES = [
  { src: '.prettierrc', dest: '.prettierrc' },
  { src: 'eslint.config.js', dest: 'eslint.config.js' },
  { src: '.husky/pre-commit', dest: '.husky/pre-commit' },
  { src: '.husky/pre-push', dest: '.husky/pre-push' },
];

// Required dependencies
const REQUIRED_DEPS = [
  '@eslint/js@^9.22.0',
  'eslint@^9.22.0',
  'eslint-config-prettier@^10.1.1',
  'eslint-plugin-prettier@^5.2.3',
  'globals@^16.0.0',
  'husky@^9.1.7', 
  'lint-staged@^15.4.3',
  'prettier@^3.5.3',
];

// Setup project with configuration files
async function setupProject() {
  try {

    // Directories
    const templatesDir = path.join(__dirname, 'templates');
    const userDir = process.cwd();

    // 1. Install dependencies
    console.log('📦 Installing required dependencies...');
    await execa('npm', ['install', '-D', ...REQUIRED_DEPS], {
      stdio: 'inherit', // Output to console
      cwd: userDir // Run in user's project directory
    });

    // 2. Copy config files
    console.log('⚡ Setting up configuration files...');
    for (const file of CONFIG_FILES) {
      const srcPath = path.join(templatesDir, file.src); // Template file
      const destPath = path.join(userDir, file.dest); // Destination file
      
      // Ensure destination directory exists
      await fs.ensureDir(path.dirname(destPath));
      
      // Backup existing file
      if (await fs.pathExists(destPath)) {
        const backupPath = `${destPath}.bak`; 
        console.warn(`⚠️  Backup existing ${file.dest} → ${backupPath}`);
        await fs.copy(destPath, backupPath);
      }
      
      await fs.copy(srcPath, destPath); // Copy template to destination
    }

    // 3. Set hook permissions (Husky auto-installs now)
    console.log('🔧 Configuring Git hooks...');
    if (process.platform !== 'win32') { // Skip on Windows
      const preCommitPath = path.join(userDir, '.husky/pre-commit');
      const prePushPath = path.join(userDir, '.husky/pre-push');
      await fs.chmod(preCommitPath, 0o755); // Make pre-commit executable
      await fs.chmod(prePushPath, 0o755); // Make pre-push executable
    }

    console.log('\n✅ Setup successful! Features enabled:');
    console.log('- ESLint + Prettier code quality');
    console.log('- Automatic pre-commit formatting');
    console.log('- Pre-push quality checks\n');

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('- Delete node_modules and retry');
    console.log('- Check file permissions');
    process.exit(1);
  }
}

export { setupProject as setupConfigs }; // Export setup function

// Run setup if script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) { 
  await setupProject();
}