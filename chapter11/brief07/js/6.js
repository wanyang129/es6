// 对象的Symbol.replace属性,指向一个方法,当该对象被String.prototype.replace方法调用时,会返回该方法的返回值.
/**
 * String.prototype.replace(searchValue,replaceValue)
 * 等同于
 * searchValue[Symbol.replace](this,replaceValue)
 */
const x = {};
// x[Symbol.replace] = (...s) => console.log(s);
console.log('hello'.replace(x, 'world'));
/**
 * Symbol.replace方法会收到两个参数,第一个参数是replace方法正在作用的对象,
 * 上面例子是hello,第二个参数是替换后的值,上面例子是world.
 */