import { defineConfig } from "vite";

export default defineConfig({
  // The entry point of your application
  main: "./src/**/*.{js,ts,jsx,tsx}",

  build: {
    // Output directory for production build
    outDir: "dist",
  },
  // Development server configurations
  server: {
    // Port to run the development server on
    // Default: 3000
    port: 3000,
  },
});
