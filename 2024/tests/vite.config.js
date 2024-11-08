/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reporters: ["html"],
      exclude: ["**/helper/*"],
      include: ["**/*.js"],
    },
  },
});
