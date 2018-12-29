// es6之前，不能直接为函数的参数指定默认值，只能才采用变通的方法
// function log(x, y) {
//   y = y || "world";
//   console.log(x, y);
// }
function log(x, y) {
  if (typeof y === "undefined") {
    y = "world";
  }
  console.log(x, y);
}
log("Hello");
log("Hello", "China");
log("Hello", "");