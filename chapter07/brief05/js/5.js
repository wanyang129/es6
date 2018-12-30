// 箭头函数使得表达更加简洁
const isEven = n => n % 2 === 0;
const square = n => n * n;

// 箭头函数的一个用处是简化回调函数
// 正常函数写法
[1, 2, 3].map(function (x) {
  return x * x;
});
// 箭头函数写法
[1, 2, 3].map(x => x * x);

var result = values.sort(function (a, b) {
  return a - b;
});
var result = values.sort((a, b) => a - b);