// 函数的length属性不包括rest参数
console.log((function (a) { }).length);
console.log((function (...a) { }).length);
console.log((function (a, ...b) { }).length);