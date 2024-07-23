import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import mdx from "@mdx-js/rollup";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx"] }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    postcss({
      extensions: [".css"],
      extract: false,
    }),
    mdx(),
    url({
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg"],
      limit: 0,
      emitFiles: true,
    }),
    svgr(),
    terser(),
    copy({
      targets: [
        { src: "src/global.css", dest: "dist" },
        { src: "public/fonts/*", dest: "dist/fonts" },
        { src: "src/stories/assets/*", dest: "dist/assets" }, // Copy all assets to the dist/assets folder
      ],
    }),
  ],
};
