const os = require("os");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const threads = os.cpus().length;
console.log("threads:", threads);
const getStyleLoaders = (preProcessor) => {
  return [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};
module.exports = {
  //入口
  entry: "./src/main.js",
  //输出
  output: {
    //所有文件的目录
    path: undefined, //开发模式没有输出，不需要指定输出目录
    filename: "static/js/[name].js", //将js文件输出到static/js 目录中
    // filename: "static/js/[name].js", // 入口文件打包输出资源命名方式
    chunkFilename: "static/js/[name].chunk.js", // 动态导入输出资源命名方式
    assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
    // clean: true, // 自动将上次打包目录资源清空
  },
  //加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            //use 数组里面的loader 执行顺序是从右到左，从后面往前面执行
            use: getStyleLoaders(),
          },
          {
            test: /\.less$/i,
            use: getStyleLoaders("less-loader"),
          },
          {
            test: /\.s[ac]ss$/,
            use: getStyleLoaders("sass-loader"),
          },
          {
            test: /\.styl$/,
            use: getStyleLoaders("stylus-loader"),
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 150 * 1024,
              },
            },
            // generator: {
            //   // 将图片文件输出到 static/imgs 目录中
            //   // 将图片文件命名 [hash:8][ext][query]
            //   // [hash:8]: hash值取8位
            //   // [ext]: 使用之前的文件扩展名
            //   // [query]: 添加之前的query参数
            //   filename: "static/imgs/[hash:8][ext][query]",
            // },
            // parser: {
            //   dataUrlCondition: {
            //     maxSize: 150 * 1024, // 4kb
            //   },
            // },
          },
          {
            test: /\.(woff|ttf|woff2)/,
            type: "asset/resource",
            // generator: {
            //   // 将图片文件输出到 static/fonts 目录中
            //   // 将图片文件命名 [hash:8][ext][query]
            //   // [hash:8]: hash值取8位
            //   // [ext]: 使用之前的文件扩展名
            //   // [query]: 添加之前的query参数
            //   filename: "static/fonts/[hash:8][ext][query]",
            // },
          },
          {
            test: /\.(mp3|mp4)/,
            type: "asset/resource",
            // generator: {
            //   // 将图片文件输出到 static/fonts 目录中
            //   // 将图片文件命名 [hash:8][ext][query]
            //   // [hash:8]: hash值取8位
            //   // [ext]: 使用之前的文件扩展名
            //   // [query]: 添加之前的query参数
            //   filename: "static/medea/[hash:8][ext][query]",
            // },
          },
          {
            test: /\.m?js$/,
            // exclude: /(node_modules)/,// 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"), // 也可以用包含
            use: [
              {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                  // presets: ["@babel/preset-env"],
                  cacheDirectory: true, // 开启babel编译缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },
        ],
      },
    ],
  },
  //插件
  plugins: [
    new ESLintPlugin({
      // 指定文件根目录，类型为字符串。
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules", // 默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
      threads, // 开启多进程
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  //模式
  mode: "development", // configuration.mode should be one of these:"development" | "production" | "none"
  devtool: "cheap-module-source-map", //优点：打包编译速度快，只包含行映.缺点：没有列映射
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "8002", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
  },
};
