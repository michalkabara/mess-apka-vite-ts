/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "./src/img"),
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
