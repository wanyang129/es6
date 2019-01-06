// 对象的扩展运算符等同于使用Object.assign()方法
let aClone = { ...a };
// 等同于
let aClone = Object.assign({}, a);
// 上面的例子只是拷贝了对象实例的属性,如果想完整克隆一个对象,还拷贝对象原型的属性,可以采用下面的写法.
// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};
// 写法二
const clone2 = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);