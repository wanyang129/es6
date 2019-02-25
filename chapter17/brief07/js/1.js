// 如果在Generator函数内部，调用另一个Generator函数，默认情况下是没有效果的。
function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  foo();
  yield 'y';
}
for (let v of bar()) {
  console.log(v);
}
// 上面代码中，foo和bar都是Generator函数，在bar里面调用foo，是不会有效果的。