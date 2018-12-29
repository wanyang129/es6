// es6新增了4个对数相关方法
// Math.expm1(x)返回e**x-1即Math.exp(1)-1.
console.log(Math.expm1(-1));
console.log(Math.expm1(0));
console.log(Math.expm1(1));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.expm1 = Math.expm1 || function (x) {
  return Math.exp(x) - 1;
};
console.log("==============================");
// Math.log1p(x)方法返回1+x的自然对数,即Math.log(1+x).如果x小于-1,返回NaN
console.log(Math.log1p(1));
console.log(Math.log1p(0));
console.log(Math.log1p(-1));
console.log(Math.log1p(-2));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.log1p = Math.log1p || function (x) {
  return Math.log(1 + x);
};
console.log("===============================");
// Math.log10(x)返回以10为底的对数.如果x小于0,则返回NaN
console.log(Math.log10(2));
console.log(Math.log10(1));
console.log(Math.log10(-2));
console.log(Math.log10(100000));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.log10 = Math.log10 || function (x) {
  return Math.log(x) / Math.LN10;
};
console.log("================================");
// Math.log2(x)返回以2为底的x的对数.如果x小于0,则返回NaN
console.log(Math.log2(3));
console.log(Math.log2(2));
console.log(Math.log2(1));
console.log(Math.log2(0));
console.log(Math.log2(-2));
console.log(Math.log2(1024));
console.log(Math.log2(1 << 29));
// 对于没有部署这个方法的环境,可以用下面的代码模拟
Math.log2 = Math.log2 || function (x) {
  return Math.log(x) / Math.LN2;
};