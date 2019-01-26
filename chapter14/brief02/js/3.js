// Reflect.set(target,name,value,receiver)
// Reflect.set方法设置target对象的name属性等于value
var myObject = {
  foo: 1,
  set bar(value) {
    return this.foo = value;
  }
}
console.log(myObject.foo);
Reflect.set(myObject, 'foo', 2);
console.log(myObject.foo);
Reflect.set(myObject, 'bar', 3);
console.log(myObject.foo);
