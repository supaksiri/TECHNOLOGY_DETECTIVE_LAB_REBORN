import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/TECHNOLOGY_DETECTIVE_LAB_REBORN/',
  test: { environment: 'node' },
});
