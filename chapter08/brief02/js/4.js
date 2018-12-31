/**
 * 扩展运算符背后调用的是遍历器接口(Symbol.iterator),
 * 如果一个对象没有部署这个接口,就无法转换.
 * Array.from方法还支持类似数组的对象.所谓类似数组的对象,本质特征只有一点,即必须有length属性.
 * 因此,任何有length属性的对象,都可以通过Array.from方法转为数组,而此时扩展运算符就无法转换.
 */
console.log(Array.from({ length: 3 }));
// 对于还没有部署该方法的浏览器,可以用Array.prototype.slice方法替代
const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))();