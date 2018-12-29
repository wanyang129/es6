// javascript的整数使用32位二进制形式表示,Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0
console.log(Math.clz32(0));
console.log(Math.clz32(1));
console.log(Math.clz32(1000));
console.log(Math.clz32(0b01000000000000000000000000000000));
console.log(Math.clz32(0b00100000000000000000000000000000));
// 左移运算符与Math.clz32方法直接相关
console.log("=====================");
console.log(Math.clz32(0));
console.log(Math.clz32(1));
console.log(Math.clz32(1 << 1));
console.log(Math.clz32(1 << 2));
console.log(Math.clz32(1 << 29));
// 对于小数,Math.clz32方法只考虑整数部分
console.log("===========================");
console.log(Math.clz32(3.2));
console.log(Math.clz32(3.9));
// 对于空值或其他类型的值,Math.clz32方法会将它们先转为数值,然后再计算
console.log("===========================");
console.log(Math.clz32());
console.log(Math.clz32(NaN));
console.log(Math.clz32(Infinity));
console.log(Math.clz32(null));
console.log(Math.clz32('foo'));
console.log(Math.clz32([]));
console.log(Math.clz32({}));
console.log(Math.clz32(true));