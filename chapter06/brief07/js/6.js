// Math.fround方法返回一个数的32位单精度浮点数形式.
console.log(Math.fround(0));
console.log(Math.fround(1));
console.log(Math.fround(2 ** 24 - 1));
// 如果参数的绝对值大于2**24,返回的结果便开始丢失精度
console.log("=========================");
console.log(Math.fround(2 ** 24));
console.log(Math.fround(2 ** 24 + 1));
/**
 * Math.fround方法的主要作用,是将64位双精度浮点数转为32位单精度浮点数.
 * 如果小数的精度超过24个二进制位,返回值就会不同于原值,否则返回值不变(即与64位双精度值一致).
 */
console.log("===========================");
// 未丢失有效精度
console.log(Math.fround(1.125));
console.log(Math.fround(7.25));
// 丢失精度
console.log(Math.fround(0.3));
console.log(Math.fround(0.7));
console.log(Math.fround(1.0000000123));

// 对于NaN和Infinity,此方法返回原值,对于其它类型的非数值,Math.fround方法会先将其转为数值,再返回单精度浮点数
console.log(Math.fround(NaN));
console.log(Math.fround(Infinity));

console.log(Math.fround('5'));
console.log(Math.fround(true));
console.log(Math.fround(null));
console.log(Math.fround([]));
console.log(Math.fround({}));

// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.fround = Math.fround || function (x) {
  return new Float32Array([x])[0];
};