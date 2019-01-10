// 扩展运算符...内部使用for...of循环,所以也可以用于Set结构
let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
console.log(set);
console.log(arr);