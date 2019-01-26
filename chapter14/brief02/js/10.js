// Reflect.setPrototypeOf(obj,newProto)
// Reflect.setPrototypeOf方法用于设置目标对象的原型(prototype),对应Object.setPrototypeOf(obj,newProto)方法,它返回一个布尔值,表示是否设置成功
const myObj = {};
Object.setPrototypeOf(myObj, Array.prototype);
Reflect.setPrototypeOf(myObj, Array.prototype);
myObj.length
// 如果无法设置目标对象的原型,比如,目标对象禁止扩展,Reflect.setPrototypeOf方法返回false
console.log(Reflect.setPrototypeOf({}, null));
console.log(Reflect.setPrototypeOf(Object.freeze({}), null));
// 如果第一个参数不是对象,Object.setPrototypeOf会返回第一个参数本身,而Reflect.setPrototypeOf会报错
// 如果第一个参数是undefined或null,Object.setPrototypeOf和Reflect.setPrototypeOf都会报错.