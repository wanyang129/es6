// 与解构赋值结合
// 扩展运算符可以与解构赋值结合起来,用于生成数组
a = list[0], rest = list.slice(1);
[a, ...rest] = list;