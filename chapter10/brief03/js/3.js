// Object.getOwnPropertyDescriptors()方法的另一个用处,是配合Object.create()方法,将对象属性克隆到另一个新对象.这属于浅拷贝.
const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// 或者
const shallowClone = (obj) => Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// Object.getOwnPropertyDescriptors()方法可以实现一个对象继承另一个对象.
const obj = {
  __proto__: prot,
  foo: 123
};
// es6规定,__proto__只有浏览器要部署,其他环境不用部署.如果去除__proto__,上面代码就要改成下面这样.
const obj = Object.create(prot);
obj.foo = 123;
// 或者
const obj = Object.assign(Object.create(prot), { foo: 123 });

const obj = Object.create(prot, Object.getOwnPropertyDescriptors({ foo: 123 }));