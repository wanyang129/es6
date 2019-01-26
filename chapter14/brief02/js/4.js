// 如果name属性设置了赋值函数,则赋值函数的this绑定receiver
var myObject = {
  foo: 4,
  set bar(value) {
    return this.foo = value;
  }
};
var myReceiverObject = {
  foo: 0
};
Reflect.set(myObject, 'bar', 1, myReceiverObject);
console.log(myObject.foo);
console.log(myReceiverObject.foo);

/**
 * 如果Proxy对象和Reflect对象联合使用,前者拦截赋值操作,后者完成赋值的默认行为,
 * 而且传入了receiver,那么Reflect.set会触发Proxy.defineProperty拦截.
 */
let p = {
  a: 'a'
};
let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver);
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};
let obj = new Proxy(p, handler);
obj.a = 'A';
/**
 * 上面代码中,Proxy.set拦截里面使用了Reflect.set,而且传入了receiver,导致触发Proxy.defineProperty拦截.
 * 这是因为Proxy.set的receiver参数总是指向当前的Proxy实例(即上例的obj),而Reflect.set一旦传入receiver,
 * 就会将属性赋值到receiver上面(即obj),导致触发defineProperty拦截.
 * 如果Reflect.set没有传入receiver,那么就不会触发defineProperty拦截.
 */