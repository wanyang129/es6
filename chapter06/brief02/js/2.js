// Number.isNaN用来检查一个值是否为NaN
console.log("Number.isNaN(NaN)", Number.isNaN(NaN));
console.log("Number.isNaN(15)", Number.isNaN(15));
console.log("Number.isNaN('15')", Number.isNaN('15'));
console.log("Number.isNaN(true)", Number.isNaN(true));
console.log("Number.isNaN(9 / NaN)", Number.isNaN(9 / NaN));
console.log("Number.isNaN('true' / 0)", Number.isNaN('true' / 0));
console.log("Number.isNaN('true' / 'true')", Number.isNaN('true' / 'true'));
/**
 * 它们与传统的全局方法isFinite()和isNaN的区别在于,传统方法先调用Number()将非数值的值转为数值,在进行判断,
 * 而这两个新方法只对数值有效
 * 
 * Number.isFinite()对应非数值一律返回false,Number.isNaN()只有对于NaN才返回true,而非NaN一律返回false
 */

console.log("========================");
console.log("isFinite(25)", isFinite(25));
console.log("isFinite('25')", isFinite("25"));

console.log("Number.isFinite(25)", Number.isFinite(25));
console.log("Number.isFinite('25')", Number.isFinite('25'));

console.log("isNaN(NaN)", isNaN(NaN));
console.log("isNaN('NaN')", isNaN('NaN'));

console.log("Number.isNaN(NaN)", Number.isNaN(NaN));
console.log("Number.isNaN('NaN')", Number.isNaN('NaN'));
console.log("Number.isNaN(1)", Number.isNaN(1));