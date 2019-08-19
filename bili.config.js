const config = {
  input: "source/index.js",

  output: {
    format: "cjs-min"
  },

  externals: ["react", "codeflask"]
}

export default config
