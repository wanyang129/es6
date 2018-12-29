// es6在Math对象行新增了17个与数学相关的方法,所有这些方法都是静态方法,只能在Math对象上调用
// Math.trunc方法用于去除一个数的小数部分,返回整数部分
console.log(Math.trunc(4.1));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.1));
console.log(Math.trunc(-4.9));
console.log(Math.trunc(-0.1234));
// 对于非数值,Math.trunc内部使用Number方法将其先转为数值
console.log("======================");
console.log(Math.trunc('123.456'));
console.log(Math.trunc(true));
console.log(Math.trunc(false));
console.log(Math.trunc(null));
// 对于空值和无法截取整数的值,返回NaN
console.log(Math.trunc(NaN));
console.log(Math.trunc('foo'));
console.log(Math.trunc());
console.log(Math.trunc(undefined));

// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};