import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    port: 5173,
    timeout: 300 * 1000,  // タイムアウトを300秒に設定
    reuseExistingServer: !process.env.CI,
  },
  testMatch: '**/*.spec.cjs',
  use: {
    baseURL: 'http://localhost:5173',
    runner: 'none',
  },
});
