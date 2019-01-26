/**
 * Reflect对象一共有13个静态方法
 *  Reflect.apply(target,thisArg,args)
 *  Reflect.construct(target,args)
 *  Reflect.get(target,name,receiver)
 *  Reflect.set(target,name,value,receiver)
 *  Reflect.defineProperty(target,name,desc)
 *  Reflect.deleteProperty(target,name)
 *  Reflect.has(target,name)
 *  Reflect.ownKeys(target)
 *  Reflect.isExtensible(target)
 *  Reflect.preventExtensions(target)
 *  Reflect.getOwnPropertyDescriptor(target,name)
 *  Reflect.getPrototypeOf(target)
 *  Reflect.setPrototypeOf(target,prototype)
 * 
 *  上面这些方法的作用,大部分与Object对象的同名方法的作用都是相同的,而且它与Proxy对象的方法是一一对应的.
 */
// Reflect.get方法查找并返回target对象的name属性,如果没有该属性,则返回undefined
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
};
console.log(Reflect.get(myObject, 'foo'));
console.log(Reflect.get(myObject, 'bar'));
console.log(Reflect.get(myObject, 'baz'));