// 与数组的扩展运算符一样,对象的扩展运算符后面可以跟表达式
let x = 3;
const obj = {
  ...Object(x > 1 ? { a: 1 } : {}),
  b: 2
};
let a = { x: 0 };
// 扩展运算符的参数对象之中,如果有取值函数get,这个函数是会执行的
let aWithGetter = {
  ...a,
  get x() {
    throw new Error('not throw yet');
  }
};
let runtimeError = {
  ...a,
  ...{
    get x() {
      throw new Error('throw now');
    }
  }
}