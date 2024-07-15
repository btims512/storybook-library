import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import mdx from "@mdx-js/rollup";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

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
    postcss(),
    mdx(),
    url({
      include: ["**/*.svg"],
      limit: 0,
    }),
    svgr(),
    terser(),
  ],
};
