// es6内部使用严格相等运算符(===),判断一个位置是否有值.
let [x = 1] = [undefined];
console.log(x);
let [y = 1] = [null];
console.log(y);