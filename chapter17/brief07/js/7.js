let delegatedIterator = (function* () {
  yield 'Hello!';
  yield 'Bye!';
}());
let delegatingIterator = (function* () {
  yield 'Greetings!';
  yield* delegatedIterator;
  yield 'Ok,bye.';
}());
for (let value of delegatingIterator) {
  console.log(value);
}
/**
 * 上面代码中，delegatingIterator是代理者，delegatedIterator是被代理者。
 * 由于yield* delegatedIterator语句得到的值，是要给遍历器，所以要用星号表示。
 * 运行结果就是使用一个遍历器，遍历了多个Generator函数，有递归的效果。
 * 
 * yield*后面的Generator函数（没有return语句时），等同于Generator函数内部，
 * 部署一个for...of循环。
 */
function* concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}
// 等同于
function* concat2(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}
/**
 * 上面代码说明，yield*后面的Generator函数（没有return语句时），
 * 不过是for...of的一种简写形式，完全可以用后者替代前者。
 * 反之，在有return语句时，则需要用var value=yield* iterator的形式获取return语句的值。
 */