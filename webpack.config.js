const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 진입 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // 빌드 시 dist 폴더 정리
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // js, jsx 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // import 시 확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
  },
  mode: "development",
};
