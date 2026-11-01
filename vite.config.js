import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  // Relative asset paths: the site is served from a GitHub Pages project subpath.
  base: "./",
});
