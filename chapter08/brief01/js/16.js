
// 如果将扩展运算符用于数组赋值,只能放在参数的最后一位,否则会报错.
// const [...butLast, last] = [1, 2, 3, 4, 5];
// const [first, ...middle, last] = [1, 2, 3, 4, 5];
const [first, ...last] = [1, 2, 3, 4, 5];