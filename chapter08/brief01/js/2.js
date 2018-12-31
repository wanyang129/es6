// 由于扩展运算符可以展开数组,所以不再需要apply方法,将数组转为函数的参数了
// es5写法
function f(x, y, z) {

}
var args = [0, 1, 2];
f.apply(null, args);

// es6写法
function f(x, y, z) {

}
let args = [0, 1, 2];
f(...args);