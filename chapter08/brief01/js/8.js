// 扩展运算符提供了复制数组的简便写法
const a1 = [1, 2];
const a2 = [...a1];
a2[0] = 3;
console.log("a1", a1);
console.log("a2", a2);