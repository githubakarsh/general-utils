import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "bundle.js",
      format: "cjs",
    },
    {
        file: 'dist/GeneralUtils.js',
        format: 'cjs',
        name: 'GeneralUtils',
        esModule: false,
        exports: "named",
        sourcemap: true,
        plugins: [terser()]
    },
  ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
    }),
  ],
  
};
