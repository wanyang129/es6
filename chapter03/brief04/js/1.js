// 解构赋值时,如果等号右边是数值和布尔值,则会先转为对象.
let { toString: s } = 123;
console.log(s);
console.log(s === Number.prototype.toString);

