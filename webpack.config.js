const path = require("path");
module.exports = {
  //入口
  entry: "./src/main.js",
  //输出
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  //加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        //use 数组里面的loader 执行顺序是从右到左，从后面往前面执行
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //插件
  plugins: [],
  //模式
  mode: "development", // configuration.mode should be one of these:"development" | "production" | "none"
};
