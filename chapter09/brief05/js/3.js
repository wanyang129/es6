/**
 * javascript引擎内部,super.foo等同于Object.getPrototypeOf(this).foo(属性)或Object.getPrototypeOf(this).foo.call(this)(方法)
 */
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  }
};
const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}
Object.setPrototypeOf(obj, proto);
obj.foo();
// 上面代码中,super.foo指向远行对象proto的foo方法,但是绑定的this却还是当前对象obj