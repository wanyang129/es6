// 如果name属性部署了读取函数getter,则读取函数的this绑定receiver
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
};
var myReceiverObject = {
  foo: 4,
  bar: 4
};
console.log(Reflect.get(myObject, 'baz', myReceiverObject));
// 如果第一个参数不是对象,Reflect.get方法会报错
Reflect.get(1, 'foo');
Reflect.get(false, 'foo');