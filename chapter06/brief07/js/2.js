// Math.sign方法用来判断一个数到底是整数、负数、还是零.对于非数值,会先将其转换为数值
/**
 * 它会返回五种值
 * 参数为整数:返回+1;
 * 参数为负数:返回-1
 * 参数为0:返回0;
 * 参数为-0:返回-0;
 * 其他值:返回NaN
 */
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(NaN));
// 如果参数是非数值,会自动转为数值.对于那些无法转为数值的值,会返回NaN
console.log("============================");
console.log(Math.sign(''));
console.log(Math.sign(true));
console.log(Math.sign(false));
console.log(Math.sign(null));
console.log(Math.sign('9'));
console.log(Math.sign('foo'));
console.log(Math.sign());
console.log(Math.sign(undefined));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.sign = Math.sign || function (x) {
  x = +x;
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
