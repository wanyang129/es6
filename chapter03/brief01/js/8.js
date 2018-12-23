// 默认值可以引用解构赋值的其他变量,但该变量必须已经声明
let [x = 1, y = x] = [];
console.log(x);
console.log(y);