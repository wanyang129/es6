/**
 * javascript的7种数据类型
 * undefined
 * null
 * 布尔值(Boolean)
 * 字符串(String)
 * 数值(Number)
 * 对象(Object)
 */
let s = Symbol();
console.log(typeof s);
/**
 * Symbol函数前不能使用命令,否则会报错.这是因为生成的Symbol是一个原始类型的值,不是对象.
 * 也就是说,由于Symbol值不是对象,所以不能添加属性.基本上,它是一种类似于字符串的数据类型.
 */
let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString());
// 如果Symbol的参数是一个对象,就会调用该对象的toString方法,将其转为字符串,然后才生成一个Symbol值.
const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym);