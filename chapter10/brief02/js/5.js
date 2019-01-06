/**
 * Object.assign方法实行的是浅拷贝,而不是深拷贝.
 * 也就是说,如果源对象某个属性的值是对象,那么目标对象拷贝得到的是这个对象的引用.
 */
const obj1 = { a: { b: 1 } };
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
console.log(obj2.a.b);

// 对于这种嵌套的对象,一旦遇到同名属性,Object.assign的处理方法是替换,而不是添加
const target = { a: { b: 'c', d: 'e' } };
const source = { a: { b: 'hello' } };
Object.assign(target, source);
console.log(target);

// Object.assign可以用来处理数组,但是会把数组视为对象.
console.log(Object.assign([1, 2, 3], [4, 5]));
// 上面代码中,Object.assign把数组视为属性名为0、1、2的对象,因此,源数组的0号属性覆盖了目标数组的0号属性1.

