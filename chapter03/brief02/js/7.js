// 对象的解构也可以指定默认值
var { x1 = 3 } = {};
console.log(x1);
var { x2, y2 = 5 } = { x2: 1 };
console.log(x2);
console.log(y2);
var { x3, y3 = 3 } = {};
console.log(y3);
var { x4: y4 = 3 } = { x4: 5 };
console.log(y4);
var { message: msg = "something went wrong" } = {};
console.log(msg);
// 默认值生效的条件是,对象的属性值严格等于undefined
var { x5 = 3 } = { x5: undefined };
console.log(x5);
var { x6 = 3 } = { x6: null };
console.log(x6);
// 如果解构模式是嵌套的对象,而且子对象所在的父属性不存在,那么将会报错
let { foo: { bar } } = { baz: "baz" };