import count from "./js/count";
import sum from "./js/sum";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.scss";
import "./sass/index.sass";
import "./stylus/index.styl";
import "./iconfont/iconfont.css";
import "./medea/sgs002.mp4";
import url from "./medea/xkfy.mp3";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4, 5, 9));
console.log(url);

// var html = '2333'

// https://webpack.docschina.org/api/hot-module-replacement/
if (module.hot) {
  module.hot.accept("./js/count.js", (count) => {
    console.log(count);
  });
  module.hot.accept("./js/sum.js", (sum) => {
    console.log(sum);
  });
}
