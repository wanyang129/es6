// this关键字总是指向函数所在的当前对象,es6又新增了另一个类似的关键字super,指向当前对象的原型对象
const proto = {
  foo: 'hello'
};
const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
}
Object.setPrototypeOf(obj, proto);
console.log(obj.find());
// 上面代码中,对象obj.find()方法之中,通过super.foo引用了原型对象proto的foo属性