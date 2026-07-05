import { resolve, dirname } from "path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import sassGlobImports from "vite-plugin-sass-glob-import";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "src");

export default defineConfig({
  root,
  base: "/hifumiyo-tutorial/",
  server: {
    port: 5173,
    host: "localhost",
    open: true,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
        business: resolve(root, "business.html"),
        hanasakasha: resolve(root, "hanasakasha.html"),
        guide: resolve(root, "guide.html"),
        news: resolve(root, "news.html"),
        donation: resolve(root, "donation.html"),
        access: resolve(root, "access.html"),
        contact: resolve(root, "contact.html"),
      },
    },
  },
  css: {
    postcss: { plugins: [autoprefixer()] },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: "",
      },
    },
  },
  plugins: [
    sassGlobImports(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/assets/styles"),
      "@js": resolve(__dirname, "src/assets/js"),
    },
  },
});
