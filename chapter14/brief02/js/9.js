// Reflect.getPrototypeOf方法用于读取对象的__proto__属性,对应Object.getPrototypeOf(obj)
const myObj = new FancyThing();
Object.getPrototypeOf(myObj) === FancyThing.prototype;
Reflect.getPrototypeOf(myObj) === FancyThing.prototype;
// Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是,如果参数不是对象,Object.getPrototypeOf会将这个参数转为对象,然后再运行,而Reflect.getPrototypeOf会报错.