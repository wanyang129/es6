// es6允许按照一定模式,从数组和对象中提取值,对变量进行赋值,这被称为解构.
// 以前为变量赋值,只能直接指定值
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a);
// console.log(b);
// console.log(c);
// es6允许写成下面这样
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
// 本质上,这种写法属于模式匹配,只要等号两边的模式匹配,左边的变量就会被赋予对应的值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);
let [, , third] = ["foo", "bar", "baz"];
console.log(third);
let [x, , y] = [1, 2, 3];
console.log(x);
console.log(y);
let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);
