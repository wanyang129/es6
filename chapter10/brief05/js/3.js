// Object.values()返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历属性的键值.
const obj = {
  foo: 'bar',
  baz: 42
};
console.log(Object.values(obj));