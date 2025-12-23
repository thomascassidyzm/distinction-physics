import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { execSync } from 'child_process';

function getBuildNumber() {
  try {
    const count = execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim();
    const shortHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    return `${count}.${shortHash}`;
  } catch {
    return 'dev';
  }
}

const buildNumber = getBuildNumber();

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    define: {
      '__BUILD_NUMBER__': JSON.stringify(buildNumber)
    }
  }
});
