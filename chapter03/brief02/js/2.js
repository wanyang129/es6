/**
 * 对象的解构与数组有一个重要的不同,数组的元素是按次序排列的,变量的取值由它的位置决定;
 * 而对象的属性没有次序,变量必须与属性同名,才能渠道正确的值.
 */
let { bar, foo } = { foo: "aaa", bar: "bbb" };
console.log(foo);
console.log(bar);
let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz);