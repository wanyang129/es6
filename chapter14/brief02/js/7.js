// Reflect.deleteProperty方法等同于delete obj[name],用于删除对象的属性.
const myObj = {
  foo: 'bar'
};
delete myObj.foo;
console.log(Reflect.deleteProperty(myObj, 'foo'));
// 该方法返回一个布尔值,如果删除成功,否则被删除的属性不存在,返回true,删除失败,被删除的属性依然存在,返回false
