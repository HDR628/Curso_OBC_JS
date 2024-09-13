const path = require("path")

module.exports = {
    entry: {
      index: './src/index.js'
    },
    output: {
        filename:"[name].min.js",
        path: path.resolve(__dirname,"dist")
    },
    mode: 'development',
    module: {
        rules: {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
    },
    plugins: [
      
    ]
  }