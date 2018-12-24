// 对象的解构赋值是下面形式的简写
// let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo);
// console.log(bar);
// 对象的解构赋值的内部机制,是先找到同名属性,然后再赋给对应的变量.真正被赋值的是后者,而不是前者
let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz);
// console.log(foo);
// foo是匹配的模式,baz才是变量,真正被赋值的是变量baz,而不是模式foo

// 与数组一样,解构也可以用于嵌套解构的对象
let obj = {
  p: [
    "Hello",
    { y: "World" }
  ]
};
let { p: [x, { y }] } = obj;
console.log(x);
console.log(y);
// 此时,p是模式,不是变量,因此不会被赋值.