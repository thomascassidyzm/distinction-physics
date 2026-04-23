import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { execSync } from 'child_process';

function getBuildNumber() {
  try {
    const shortHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
    // Build timestamp (YYMMDD-HHMM, UTC). Monotonic across deploys even when
    // the git clone is shallow (as it is on Vercel), so the indicator always
    // moves when a new build ships.
    const stamp = new Date().toISOString().slice(2, 16).replace(/[-:T]/g, '').replace(/(\d{6})(\d{4})/, '$1-$2');
    return `${stamp}.${shortHash}`;
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
