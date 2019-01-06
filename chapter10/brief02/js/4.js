/**
 * 其他类型的值(即数值、字符串和布尔值)不在首参数,也不会报错.
 * 但是,除了字符串会以数组形式,拷贝如目标对象,其他值都不会产生效果.
 */
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj);
/**
 * 上面代码中,v1,v2,v3分别是字符串、布尔值和数值,结果只有字符串合入目标对象(以字符数组的形式),
 * 数值和布尔值都会被忽略.这是因为只有字符串的包装对象,会产生可枚举属性.
 */
console.log(Object(true));
console.log(Object(10));
console.log(Object('abc'));
// Object.assign拷贝的属性是有限制的,只拷贝源对象的自身属性(不拷贝继承属性),也不拷贝不可枚举的属性(enumerable:false)
console.log(Object.assign({ b: 'c' }, Object.defineProperty({}, 'invisible', {
  enumerable: false,
  value: 'hello'
})));
// 属性名为Symbol值的属性,也会被Object.assign拷贝
console.log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }));