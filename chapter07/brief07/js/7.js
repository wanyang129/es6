// es6的函数默认值
function factorial(n, total = 1) {
  if (n === 1)
    return total;
  return factorial(n - 1, n * total);
}
console.log(factorial(5));