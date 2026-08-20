import { rm } from "node:fs/promises";
import tailwind from "bun-plugin-tailwind";

await rm("elm-stuff", { recursive: true, force: true });
await rm("dist", { recursive: true, force: true });

const elmMake = Bun.spawn(
  [
    "bunx",
    "elm",
    "make",
    "src/Main.elm",
    "--optimize",
    "--output=elm-stuff/output.js",
  ],
  { stdout: "inherit", stderr: "inherit" },
);

if ((await elmMake.exited) !== 0) {
  process.exit(1);
}

await Bun.build({
  entrypoints: ["public/index.html"],
  outdir: "dist",
  target: "browser",
  format: "esm",
  minify: true,
  env: "BUN_PUBLIC_*",
  publicPath: process.env.BUN_PUBLIC_BASE_URL || "/",
  plugins: [tailwind], // add/remove as you see fit
});
