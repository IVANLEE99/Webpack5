// const { sum } = import("./math");
// import { sum } from "./math";
const { sum } = require("./math");

console.log("main.js");
console.log(sum(1, 899));

document.getElementById("btn").onclick = function (e) {
  import("./count")
    .then((res) => {
      console.log(res.default(3, 99));
    })
    .catch((err) => {
      console.error(err);
    });
};
