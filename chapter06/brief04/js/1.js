// Number.isInteger()用来判断一个数值是否为整数
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.1));
// javascript内部,整数和浮点数采用的是同样的储存方法,所以25和25.0被视为同一个值
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));
// 如果参数不是数值,Number.isInteger返回false
console.log(Number.isInteger());
console.log(Number.isInteger(null));
console.log(Number.isInteger('15'));
console.log(Number.isInteger(true));
/**
 * 由于javascript采用ieee 754标准,数值存储未64位双精度格式,
 * 数值精度最多可以达到53个二进制位(1个隐藏位与52个有效位).
 * 如果数值的精度超过这个限度,第54位及后面的位就会被丢弃,这种情况下,
 * Number.isInteger可能会误判.
 */
console.log(Number.isInteger(3.0000000000000002));
/**
 * 如果一个数值的绝对值小于Number.MIN_VALUE(5E-324),即小于javascript能够分辨的最小值,会被自动转为0.
 * 这时,Number.isInteger也会误判
 */
console.log(Number.isInteger(5E-324));
console.log(Number.isInteger(5E-325));
// 如果对数据精度要求较高,不建议使用Number.isInteger()判断一个数值是否为整数