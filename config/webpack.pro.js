const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //入口
  entry: "./src/main.js",
  //输出
  output: {
    //所有文件的目录
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/main.js", //将js文件输出到static/js 目录中
    clean: true, // 自动将上次打包目录资源清空
  },
  //加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        //use 数组里面的loader 执行顺序是从右到左，从后面往前面执行
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 150 * 1024,
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 150 * 1024, // 4kb
        //   },
        // },
      },
      {
        test: /\.(woff|ttf|woff2)/,
        type: "asset/resource",
        generator: {
          // 将图片文件输出到 static/fonts 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/fonts/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(mp3|mp4)/,
        type: "asset/resource",
        generator: {
          // 将图片文件输出到 static/fonts 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/medea/[hash:8][ext][query]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env"],
          //   },
        },
      },
    ],
  },
  //插件
  plugins: [
    new ESLintPlugin({
      // 指定文件根目录，类型为字符串。
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  //模式
  mode: "production", // configuration.mode should be one of these:"development" | "production" | "none"
  // 开发服务器
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "8002", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
};
