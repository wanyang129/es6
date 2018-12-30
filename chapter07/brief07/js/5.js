// 计算Fibonacci数列，也能充分说明尾递归优化的重要性
function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(10));
// 堆栈溢出
// console.log(Fibonacci(100));
// console.log(Fibonacci(500));

function Fibonacci2(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2;
  }
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(10));
console.log(Fibonacci2(100));
console.log(Fibonacci2(500));
console.log(Fibonacci2(10000));
/**
 * 尾递归的实现，往往需要改写递归函数，确保最后一步值调用自身。
 * 做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。
 */
// 在尾递归函数之外，再提供一个正常形式的函数
function tailFactorial(n, total) {
  if (n === 1)
    return total;
  return tailFactorial(n - 1, n * total);
}
function factorial(n) {
  return tailFactorial(n, 1);
}
console.log(factorial(5));