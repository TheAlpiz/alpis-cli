import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  skipNodeModulesBundle: true,
  shims: true,
  sourcemap: false,
});
