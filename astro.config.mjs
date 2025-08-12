import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  output: 'static',
  site: 'https://lauchoy.github.io',
  base: process.env.NODE_ENV === 'production' ? '/lauchoy-portfolio-v2' : '/',
});
