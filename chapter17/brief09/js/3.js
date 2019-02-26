function* F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var f = F.call(F.prototype);
console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(f.a);
console.log(f.b);
console.log(f.c);

console.log(f instanceof F);