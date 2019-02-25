function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}
for (let v of bar()) {
  console.log(v);
}