var path = require("path");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  //externals: 'react',
  entry: {
    'app': './app.jsx',
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: __dirname,
        loader: "babel-loader"
      },
    ]
  }
}

