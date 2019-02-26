/**
 * Generator函数总是返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，
 * 也继承了Generator函数的prototype对象上的方法。
 */
function* g() {

}
g.prototype.hello = function () {
  return 'hi!';
};
let obj = g();
console.log(obj instanceof g);
console.log(obj.hello());
/**
 * 上面代码表明，Generator函数g返回的遍历器obj，是g的实例，而且继承了g.prototype。
 * 但是，如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。
 */
function* h() {
  this.a = 11;
}
let obj2 = h();
console.log(obj2 instanceof h);
console.log(obj2.next());
console.log(obj2.a);
/**
 * 上面代码中，Generator函数h在this对象上面添加了一个属性a，
 * 但是obj2对象拿不到这个属性。
 */
// Generator函数也不能跟new命令一起用，会报错。
function* F() {
  yield this.x = 2;
  yield this.y = 3;
}
new F();