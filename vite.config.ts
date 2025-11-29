import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss()],
  base: "/Personal-Website/", // your GitHub repo name
});
