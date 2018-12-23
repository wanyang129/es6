// 解构赋值允许指定默认值
let [foo = true] = [];
console.log(foo);
// let [x, y = "b"] = ["a"];
// console.log(x);
// console.log(y);
let [x, y = 'b'] = ['a', undefined];
console.log(x);
console.log(y);
