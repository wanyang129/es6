// 函数name的属性,返回函数名.对象方法也是函数,因此也有name属性
const person = {
  sayName() {
    console.log('hello!');
  },
};
console.log(person.sayName.name);
/**
 * 如果对象的方法使用了取值函数getter和存值函数setter,则name属性不是在该方法上面,
 * 而是该方法的属性的描述对象的get和set属性上面,返回值是方法名前加上get和set
 */
const obj = {
  get foo() { },
  set foo(x) { }
};
// console.log(obj.foo.name);
const descriptor = Object.getOwnPropertyDescriptor(obj, "foo");
console.log(descriptor.get.name);
console.log(descriptor.set.name);
/**
 * 有两种特殊情况:bind方法创造的函数,name属性返回bound加上原函数的名字;
 * Function构造函数创造的函数,name属性返回anonymous
 */
console.log((new Function()).name);
var doSomething = function () {

};
console.log(doSomething.bind().name);
