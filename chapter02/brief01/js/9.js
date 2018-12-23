function bar(x = 2, y = x) {
  return [x, y];
}
console.log(bar());
// es6规定暂时性死区和let、const语句不出现变量提升