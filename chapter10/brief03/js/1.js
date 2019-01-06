/**
 * es5的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象.
 * es2017引入了Object.getOwnpropertyDescriptors()方法,返回指定对象所有自身属性(非继承属性)的描述对象.
 */
const obj = {
  foo: 123,
  get bar() {
    return 'abc'
  }
};
console.log(Object.getOwnPropertyDescriptors(obj));

function getOwnpropertyDescriptors(obj) {
  const result = {};
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj, key);
  }
  return result;
}
// 该方法引入的目的,主要是为了解决Object.assign()方法无法正确拷贝get属性和set属性的问题
const source = {
  set foo(value) {
    console.log(value);
  }
};
const target1 = {};
Object.assign(target1, source);
console.log(target1);
console.log(Object.getOwnPropertyDescriptor(target1, 'foo'));