// 数组的空位指,数组的某一个位置没有任何值.比如,Array构造函数返回的数组都是空位.
console.log(Array(3));
// 空位不是undefined,一个位置的值等于undefined,依然是有值的,空位是没有任何值,in运算符可以说明这一点
console.log(0 in [undefined, undefined, undefined]);
console.log(0 in [, , ,]);
console.log("======================");
/**
 * es5对空位的处理,已经很不一致了,大多数情况下会忽略空位
 *  forEach(),filter(),reduce(),every()和some()都会跳过空位
 *  map()会跳过空位,但会保留这个值
 *  join()和toString()会将空位视为undefined,而undefined和null会被处理成空字符串
 */
[, 'a'].forEach((x, i) => console.log(x, i));
console.log(['a', 'b'].filter(x => true));
console.log([, 'a'].every(x => x === 'a'));
console.log([1, , 2].reduce((x, y) => x + y));
console.log([, 'a'].some(x => x !== 'a'));
console.log([, 'a'].map(x => 1));
console.log([, 'a', undefined, null].join('#'));
console.log([, 'a', undefined, null].toString());
console.log("=======================");
// es6则是明确将空位转为undefined
// Array.from方法会将数组的空位,转为undefined,也就是说,这个方法不会忽略空位
console.log(Array.from(['a', , 'b']));
// 扩展运算符(...)也会将空位转为undefined
console.log([...['a', , 'b']]);
// copyWithin()会连空位一起拷贝
console.log([, 'a', 'b', ,].copyWithin(2, 0));
// fill()会将空位视为正常的数组位置
console.log(new Array(3).fill('a'));
// for...of循环也会遍历空位
let arr = [, ,];
for (let i of arr) {
  console.log(1);
}
// entries()、keys()、values()、find()和findIndex()会将空位处理成undefined
console.log("========================");
console.log([...[, 'a'].entries()]);
console.log([...[, 'a'].keys()]);
console.log([...[, 'a'].values()]);
console.log([, 'a'].find(x => true));
console.log([, 'a'].findIndex(x => true));