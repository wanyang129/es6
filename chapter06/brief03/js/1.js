// es6将全局方法parseInt()和parseFloat(),移植到Number对象上面,行为完全保持不变
// es5的写法
console.log("parseInt('12.34')", parseInt('12.34'));
console.log("parseFloat('123.45#')", parseFloat('123.45#'));
// es6的写法
console.log("Number.parseInt('12.34')", Number.parseInt('12.34'));
console.log("Number.parseFloat('123.45#')", Number.parseFloat('123.45#'));

// 这样做的目的,是逐步减少全局性方法,使得语言逐步模块化
console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);