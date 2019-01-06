// 由于undefined和null无法转成对象,所以如果它们作为参数,就会报错.
// Object.assign(undefined);
// Object.assign(null);
/**
 * 如果非对象参数出现在源对象的位置(即非首参数),那么处理规则有所不同.
 * 首先,这些参数都会转成对象,如果无法转成对象,就会跳过.
 * 这意味着,如果undefined和null不在首参数,就不会报错.
 */
let obj = { a: 1 };
console.log(Object.assign(obj, undefined) === obj);
console.log(Object.assign(obj, null) === obj);