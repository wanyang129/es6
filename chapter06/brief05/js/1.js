// es6在Number对象上面,新增一个极小的常量Number.EPSILON.根据规格,它表示1与大于1的最小浮点数之间的差
/**
 * 对于64位浮点数来说,大于1的最小浮点数相当于二进制的1.00...001,小数点后面有连续51个零.
 * 这个值减去1之后,就等于2的-52次方.
 */
console.log(Number.EPSILON === Math.pow(2, -52));
console.log(Number.EPSILON);
console.log(Number.EPSILON.toFixed(20));

// Number.EPSILON实际上是javascript能够表示的最小精度.误差如果小于这个值,就可以认为已经没有意义了,即不存在误差了
// 引入一个这么小的量的目的,在于为浮点数计算,设置一个误差范围.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 - 0.3);
console.log(5.551115123125783e-17.toFixed(20));

/**
 * Number.EPSILON可以用来设置能够接受的误差范围,比如,误差范围设为2的-50次方(即Number.EPSILON*Math.pow(2,2)),
 * 即如果两个浮点数的差小于这个值,我们就认为这两个浮点数相等
 */
console.log(5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2));

// Number.EPSILON的实质是一个可以接受的最小误差范围
function withinErrorMargin(left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}
console.log(0.1 + 0.2 === 0.3);
console.log(withinErrorMargin(0.1 + 0.2, 0.3));
console.log(1.1 + 1.3 === 2.4);
console.log(withinErrorMargin(1.1 + 1.3, 2.4));
// 上面的代码为浮点数运算,部署了一个误差检查函数