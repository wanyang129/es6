let { toString: s } = true;
console.log(s);
console.log(s === Boolean.prototype.toString);

// 解构赋值的规则是,只要等号右边的值不是对象或数组,就先将其转为对象.
// 由于undefined和null无法转为对象,所以对他们进行解构赋值,都会报错.
let { prop: x } = undefined;
let { prop: y } = null;
