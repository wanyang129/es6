// es6允许为函数的参数设置默认值，即直接写在参数定义的后面
function log(x, y = "World") {
  console.log(x, y);
}
log("Hello");
log("Hello", "China");
log("Hello", "");

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
const p = new Point();
console.log(p);
// 参数变量是默认声明的，所以不能用let或const再次声明
// 报错
// function foo(x = 5) {
//   let x = 1;
//   const x = 2;
// }
// 使用参数默认值时，函数不能有同名参数
// 不报错
function foo1(x, x, y) {

}
// 报错
// function foo2(x, x, y = 1) {

// }