import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  // Relative paths so the same build works on GitHub Pages and inside the Android app.
  base: './',
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  // Görseller ayrı dosya kalsın (küçükler de): ilk açılıştaki JavaScript küçük olsun, resimler gerektikçe insin.
  build: { outDir: 'dist', target: 'es2020', assetsInlineLimit: 0 },
});
