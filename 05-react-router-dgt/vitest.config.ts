/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"], // 👈 importante: en array
    globals: true, // 👈 activa expect, describe, it, etc. de forma global
  },
});
