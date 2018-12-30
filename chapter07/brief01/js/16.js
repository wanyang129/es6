// 利用参数默认值,可以指定某一个参数不得省略,如果省略就抛出一个错误.
function throwIfMissing() {
  throw new Error('Missing parameter');
}
function foo(nustBeProvided = throwIfMissing()) {
  return nustBeProvided;
}
foo();