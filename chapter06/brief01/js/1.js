// es6提供了二进制和八进制数值新的写法,分别用前缀0b(或0B)和0o(或0O)表示
console.log(0b111110111);
console.log(0b111110111 === 503);
console.log(0o767);
console.log(0o767 === 503);
// 从es5开始,在严格模式之中,八进制就不再允许使用前缀0表示,es6进一步明确,要使用前缀0o表示

// 非严格模式
(function () {
  console.log(0o11 === 011);
})();
// 严格模式
// (function () {
//   "use strict";
//   console.log(0o11 === 011);
// })()

// 如果要将0b和0o前缀的字符串数值转为十进制,要使用Number方法
console.log(Number('0b111'));
console.log(Number('0o10'));