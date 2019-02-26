function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
function F() {
  return gen.call(gen.prototype);
}
var f = new F();
console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(f.a);
console.log(f.b);
console.log(f.c);