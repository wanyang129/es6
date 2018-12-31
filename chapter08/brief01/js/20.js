// 如果对没有Iterator接口的对象,使用扩展运算符,将会报错
const obj = { a: 1, b: 2 };
let arr = [...obj];