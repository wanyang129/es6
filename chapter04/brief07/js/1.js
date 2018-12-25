// repeat方法返回一个新字符串,表示将原字符串重复n次
console.log("x".repeat(3));
console.log("hello".repeat(2));
console.log("na".repeat(0));
// 参数如果是小数,会被取整
console.log("na".repeat(2.9));
console.log("na".repeat(0.5));
// 如果repeat的参数是负数或者Infinity,会报错
// console.log("na".repeat(Infinity));
// console.log("na".repeat(-1));
// 如果参数是0到-1之间的小数,则等同于0.这是因为会先进行取整运算.0到-1之间的小数,取整以后等于-0,repeat视同为0
console.log("na".repeat(-0.9));
// 参数NaN等同于0
console.log("na".repeat(NaN));
// 如果repeat的参数是字符串,则会先转换成数字
console.log("na".repeat("na"));
console.log("na".repeat("3"));