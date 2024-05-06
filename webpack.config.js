const path = require("path");
module.exports = {
  //入口
  entry: "./src/main.js",
  //输出
  output: {
    //所有文件的目录
    path: path.resolve(__dirname, "./dist"),
    filename: "static/js/main.js", //将js文件输出到static/js 目录中
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
    ],
  },
  //插件
  plugins: [],
  //模式
  mode: "development", // configuration.mode should be one of these:"development" | "production" | "none"
};
