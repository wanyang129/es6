function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  for (let v of foo()) {
    yield v;
  }
  yield 'y';
}
for (let v of bar()) {
  console.log(v);
}