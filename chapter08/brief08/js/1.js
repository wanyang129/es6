// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, NaN].includes(NaN));
/**
 * 该方法的第二个参数表示搜索的起始位置，默认为0。
 * 如果第二个参数为负数，则表示倒数的位置，
 * 如果这时它大于数组长度，则会重置为从0开始
 */
console.log([1, 2, 3].includes(3, 3));
console.log([1, 2, 3].includes(3, -1));
// 没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值
// if (Array.indexOf(el) !== -1) {

// }
console.log("=================");
console.log([NaN].indexOf(NaN));
console.log([NaN].includes(NaN));
console.log("==================");
// 下面版本用来检查当前环境是否之处该方法，如果不支持，部署一个简易的替代版本。
const contains = (() => Array.prototype.includes ? (arr, value) => arr.includes(value) : (arr, value) => arr.some(el => el === value))();
console.log(contains(['foo', 'bar'], 'baz'));
/**
 * Map和Set数据结构有一个has方法，需要注意与includes区分
 * Map结构的has方法，使用来查找键名的，比如Map.prototype.has(key)、WeakMap.property.has(key)、Reflect.has(target,propertyKey)。
 * Set结构的has方法，是用来查找值的，比如Set.property.has(value)、WeakSet.property.has(value)。
 */