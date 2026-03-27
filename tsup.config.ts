import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next"],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(import.meta.dirname),
    };
  },
  tsconfig: "tsconfig.build.json",
});
