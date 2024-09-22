import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory relative to the Vite root (storefront directory)
    emptyOutDir: true, // Ensures that the output directory is cleaned before each build
  },
  // uncomment base before build
  //base: "/storefront/",
});
