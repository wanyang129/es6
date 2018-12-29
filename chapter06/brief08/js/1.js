// es2016新增了一个指数运算符(**)
console.log(2 ** 2);
console.log(2 ** 3);
// 这个运算符的一个特点是右结合,而不是常见的左结合.多个指数运算符连用时,是从最右边开始计算的
console.log(2 ** 3 ** 2);
console.log(2 ** (3 ** 2));
// 指数运算符可以与等号结合,形成一个新的赋值运算符(**=)
let a = 1.5;
a **= 2
console.log(a);
let b = 4;
b **= 3;
console.log(b);

// v8引擎的指数运算符与Math.pow实现不相同,对于特别大的运算结果,两者会有细微的差异
console.log(Math.pow(99, 99));
console.log(99 ** 99);