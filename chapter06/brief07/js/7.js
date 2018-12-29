// Math.hypot方法返回所有参数的平方和的平方根
console.log(Math.hypot(3, 4));
console.log(Math.hypot(3, 4, 5));
console.log(Math.hypot());
console.log(Math.hypot(NaN));
console.log(Math.hypot(3, 4, 'foo'));
console.log(Math.hypot(3, 4, '5'));
console.log(Math.hypot(-3));

// 如果参数不是数值,Math.hypot方法会将其转为数值.只要有一个参数无法转为数值,就会返回NaN.