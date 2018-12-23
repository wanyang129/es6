// 如果解构不成功,变量的值就等于undefined
let [x, y, ...z] = ["a"];
console.log(x);
console.log(y);
console.log(z);
// let [foo] = [];
// console.log(foo);
let [bar, foo] = [1];
console.log(bar);
console.log(foo);