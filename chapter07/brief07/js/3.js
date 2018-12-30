/**
 * 尾调用优化,即只保留内层函数的调用帧.
 * 如果所有含都是尾调用,那么完全可以做到每次执行时,调用帧只有一项,
 * 这将大大节省内存.
 */
function addOne(a) {
  var one = 1;
  function inner(b) {
    return b + one;
  }
  return inner(a);
}