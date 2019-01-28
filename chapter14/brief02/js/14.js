// Reflect.isExtensible方法对应Object.isExtensible,返回一个布尔值,表示当前对象是否可扩展
const myObject = {};
console.log(Object.isExtensible(myObject));
console.log(Reflect.isExtensible(myObject));
// 如果参数不是对象,Object.isExtensible会返回false,因为非对象本来就是不可扩展的,而Reflect.isExtensible会报错.
console.log(Object.isExtensible(1));
Reflect.isExtensible(1);