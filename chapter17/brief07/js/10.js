function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return 'The result';
}
function* logReturned(genObj) {
  let result = yield* genObj;
  console.log(result);
}
console.log([...logReturned(genFuncWithReturn())]);
/**
 * 上面代码中，存在两次遍历。
 * 第一次是扩展运算符遍历函数logReturned返回的遍历器对象，
 * 第二次是yield*语句遍历函数genFuncWithReturn返回的遍历器对象。
 * 这两次遍历的效果是叠加的，最终表现为扩展运算符遍历函数genFuncWithReturn返回的遍历器对象。
 * 所以，最后的数据表达式得到的值等于['a','b'].
 * 但是，函数genFuncWithReturn的return语句的返回值The result，会返回给函数logReturned内部的result变量，
 * 因此会有终端输出。
 */