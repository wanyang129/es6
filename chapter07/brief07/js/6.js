/**
 * 函数式编程有一个概念，叫做柯里化，
 * 意思是将多参数的函数转换成但参数的形式
 */
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}
function tailFactorial(n, total) {
  if (n === 1)
    return total;
  return tailFactorial(n - 1, n * total);
}
const factorial = currying(tailFactorial, 1);
console.log(factorial(5));