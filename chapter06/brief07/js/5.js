// Math.imul方法返回两个数以32位带符号整数形式相乘的结果,返回的也是一个32位的带符号整数.
console.log(Math.imul(2, 4));
console.log(Math.imul(-1, 8));
console.log(Math.imul(-2, -2));
/**
 * 如果只考虑最后32位,大多数情况下,Math.imul(a,b)与a*b的结果是相同的,
 * 即该方法等同于(a*b)|0的效果(超过32位的部分溢出).
 * 之所以需要部署这个方法,是因为javascript有精度限制,超过2的53次方的值无法精确表示.
 * 这就是说,对于那些很大的数的乘法,低位数值往往都是不精确的,Math.imul方法可以返回正确的低位数值.
 */
console.log((0x7fffffff * 0x7fffffff) | 0);
console.log(Math.imul(0x7fffffff, 0x7fffffff));