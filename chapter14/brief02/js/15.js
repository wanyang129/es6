// Reflect.preventExtensions对应Object.preventExtensions方法,用于让一个对象变为不可扩展.它返回一个布尔值,表示是否操作成功.
var myObject = {};
console.log(Object.preventExtensions(myObject));
console.log(Reflect.preventExtensions(myObject));
// 如果参数不是对象,Object.preventExtensions在es5环境报错,在es6环境返回传入的参数,而Reflect.preventExtensions会报错.
console.log(Object.preventExtensions(1));
Reflect.preventExtensions(1);