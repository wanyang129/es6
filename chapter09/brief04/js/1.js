// 对象的每个属性都有一个描述对象(Descriptor),用来控制该属性的行为.
// Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
/**
 * 描述对象的enumerable属性,称为"可枚举性",如果该属性为false,就表示某些操作会忽略当前属性.
 * 
 * 目前,有四个操作会忽略enumerable为false的属性
 *  for...in循环:只遍历对象自身的和继承的可枚举的属性
 *  Object.keys():返回对象自身的所有可枚举的属性的键名
 *  JSON.stringify():只串行化对象自身的可枚举的属性
 *  Object.assign():忽略enumerable为false的属性,只拷贝对象自身的可枚举的属性
 */
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable);
console.log(Object.getOwnPropertyDescriptor([], 'length').enumerable);
// es6规定,所有Class的原型的方法都是不可枚举的
console.log(Object.getOwnPropertyDescriptor(class { foo() { } }.prototype, 'foo').enumerable);
// 大多数时候,我们只关心对象自身的属性.所以,尽量不要用for...in循环,而用Object.keys()代替