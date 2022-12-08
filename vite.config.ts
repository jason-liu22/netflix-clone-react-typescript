/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: react().concat(tsconfigPaths()),
  test: {
    environment: "jsdom",
    globals: true,
  },
});
