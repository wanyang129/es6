console.log(Math.max.apply(null, [14, 3, 77]));
console.log(Math.max(...[14, 3, 77]));
// 等同于
console.log(Math.max(14, 3, 77));