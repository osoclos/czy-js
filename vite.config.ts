/// <reference types="vitest" />

import fs from "fs/promises";
import path from "path";

import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";

import type { ModuleFormat, OutputOptions } from "rollup";
import terser from "@rollup/plugin-terser";

const output = <OutputOptions[]>(<ModuleFormat[]>["esm"]).map((format) => ({
    format,
    entryFileNames: `index.min.js`,

    plugins: [terser()]
}));

export default defineConfig({
    root: "tests/client",
    resolve: { alias: { "czy-js": path.join(__dirname, "src") } },

    test: { include: ["../unit/**/*.ts"] },
    build: {
        outDir: path.join(__dirname, "dist"),
		emitAssets: false,

        sourcemap: true,
        rollupOptions: { output },

        lib: { entry: path.join(__dirname, "src/index.ts") }
    },

    plugins: [dtsPlugin({
        root: __dirname,
        tsconfigPath: "tsconfig.lib.json",

        rollupTypes: true,
		
		async afterBuild() {
            const files = await fs.readdir(path.join(__dirname, "tests/client/public"));
            for (const file of files) await fs.unlink(path.join(__dirname, "dist", file));
        }
    })]
});
