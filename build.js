import tailwind from "bun-plugin-tailwind";
import elmPlugin from "bun-plugin-elm";

await Bun.build({
  entrypoints: ["public/index.html"],
  outdir: "dist",
  target: "browser",
  format: "esm",
  minify: true,
  env: "BUN_PUBLIC_*",
  publicPath: process.env.BUN_PUBLIC_BASE_URL || "/",
  plugins: [tailwind, elmPlugin], // add/remove as you see fit
});
