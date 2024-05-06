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
    rules: [],
  },
  //插件
  plugins: [],
  //模式
  mode: "production", // configuration.mode should be one of these:"development" | "production" | "none"
};
