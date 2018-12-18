// 扩展运算符是三个点...,他好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5);
console.log([...document.querySelectorAll("div")]);