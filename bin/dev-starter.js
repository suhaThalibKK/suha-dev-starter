#!/usr/bin/env node
import { setupConfigs } from '../src/setup.js';

try {
  await setupConfigs();
  console.log('🎉 Successfully configured ESLint + Prettier + Husky!');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}