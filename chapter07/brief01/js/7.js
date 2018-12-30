function m1({ x = 0, y = 0 } = {}) {
  return [x, y];
}
function m2({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}
/**
 * 上面两种写法都对函数参数设定了默认值,区别是写法一函数参数的默认值是空对象,但是设置了对象解构赋值的默认值;
 * 写法二函数参数的默认值是一个有具体属性的对象,但是没有设置对象解构赋值的默认值
 */
// 函数没有参数的情况
console.log(m1());
console.log(m2());
console.log("===============");
// x和y都有值的情况
console.log(m1({ x: 3, y: 8 }));
console.log(m2({ x: 3, y: 8 }));
console.log("===============");
// x有值,y无值的情况
console.log(m1({ x: 3 }));
console.log(m2({ x: 3 }));
console.log("===============");
// x和y都无值的情况
console.log(m1({}));
console.log(m2({}));
console.log("=================");
console.log(m1({ z: 3 }));
console.log(m2({ z: 3 }));