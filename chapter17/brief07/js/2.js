// yield*表达式，用来在一个Generator函数里面执行另一个Generator函数。
function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
for (let v of bar()) {
  console.log(v);
}