function* inner() {
  yield 'hello!';
}
function* outer1() {
  yield 'open';
  yield inner();
  yield 'close';
}
var gen = outer1();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);