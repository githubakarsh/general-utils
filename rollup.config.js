import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "bundle.js",
      format: "cjs",
    },
    // {
    //     file: 'bundle.min.js',
    //     format: 'iife',
    //     name: 'version',
    //     plugins: [terser()]
    // },
  ],
};
