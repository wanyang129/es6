// es6允许直接写入变脸和函数,作为对象的属性和方法,这样的书写更加简洁
const foo = 'bar';
const baz = { foo };
console.log(baz);
// 等同于
const baz2 = { foo: foo };
console.log(baz2);
// 上面代码标明,es6允许在对象之中,直接写变量.
// 这时,属性名为变量名,属性值为变量的值.
function f(x, y) {
  return { x, y };
}
// 等同于
function f1(x, y) {
  return { x: x, y: y };
}
console.log(f(1, 2));
console.log(f1(1, 2));
// 除了属性简写,方法也可以简写
const o1 = {
  method() {
    return "Hello1";
  }
};
// 等同于
const o2 = {
  method: function () {
    return "Hello!";
  }
}