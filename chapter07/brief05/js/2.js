// 如果箭头函数不需要参数或需要多个参数,就使用一个圆括号代表参数部分
var f = () => 5;
// 等同于
var f = function () {
  return 5;
}
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function (num1, num2) {
  return num1 + num2;
}
// 如果箭头函数的代码块部分多余一条语句,就要使用大括号将它们括起来,并且使用return语句返回
var sum = (num1, num2) => { return num1 + num2; }