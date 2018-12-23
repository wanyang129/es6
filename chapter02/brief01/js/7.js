/**
 * var命令会发生"变量提升"现象,即变量可以在声明之前使用,值为undefined.
 * let命令改变了语法行为,它所声明的变量一定要在声明后使用,否则报错
 */
console.log(foo);
var foo = 2;
console.log(bar);
let bar = 2;