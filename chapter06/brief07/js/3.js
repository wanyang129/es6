// Math.cbrt方法用于计算一个数的立方根
console.log(Math.cbrt(-1));
console.log(Math.cbrt(0));
console.log(Math.cbrt(1));
console.log(Math.cbrt(2));
// 对于非数值,Math.cbrt方法内部也是先使用Number方法将其转为数值
console.log("=======================");
console.log(Math.cbrt('8'));
console.log(Math.cbrt('hello'));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.cbrt = Math.cbrt || function (x) {
  var y = Math.pow(Map.abs(x), 1 / 3);
  return x < 0 ? -y : y;
};