// 函数调用自身，称为递归。如果尾调用自身，就称为尾递归
/**
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生栈溢出错误。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生栈溢出错误
 */
function factorial(n) {
  if (n === 1)
    return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
// 上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度O(n)
// 如果改成尾递归，只保留一个调用记录，复杂度O(1)
function factorial1(n, total) {
  if (n === 1)
    return total;
  return factorial1(n - 1, n * total);
}
console.log(factorial1(5, 1));