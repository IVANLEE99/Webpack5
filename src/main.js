// import "core-js";
// import "core-js/es/promise";

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
// import { sub } from "./js/math";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4, 5, 9));
console.log(url);
// console.log(sub(4, 5));

document.getElementById("btn").onclick = function (e) {
  import(/* webpackChunkName: "math" */ "./js/math")
    .then(({ sub }) => {
      console.log(sub(1000, 9));
      alert(sub(1000, 9));
    })
    .catch((err) => {
      console.error(err);
    });
};

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

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(10));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
