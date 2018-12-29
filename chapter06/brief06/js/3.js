// 跟安全整数的两个边界值比较一下
Number.isSafeInteger = function (n) {
  return (typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER);
}
// 实际使用这个函数时,需要注意:验证运算结果是否落在安全整数的范围内,不要只验证运算结果,而要同时验证参与运算的每个值
console.log(Number.isSafeInteger(9007199254740993));
console.log(Number.isSafeInteger(900));
console.log(Number.isSafeInteger(9007199254740993 - 990));

console.log(9007199254740993 === 9007199254740992);