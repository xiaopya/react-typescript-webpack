import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const resolve = (dir: string) => path.resolve(__dirname, dir);

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: resolve("build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["import", { libraryName: "antd", style: "css" }], //antd按需加载
            ],
            cacheDirectory: true,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "style-resources-loader",
            options: {
              patterns: [path.resolve(__dirname, "./src/styles/variable.less")],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": resolve("src"), // 这样配置后 @ 可以指向 src 目录
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
