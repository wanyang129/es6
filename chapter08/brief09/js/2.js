// flatMap()方法对原数组的每个成员执行一个函数(相当于执行Array.prototype.map())),
// 然后对返回值组成的数组执行flat()方法.
// 该方法返回一个新数组,不改变原数组.
console.log([2, 3, 4].flatMap(x => [x, x * 2]));
// 相当于
console.log([[2, 4], [3, 6], [4, 8]].flat());
// flatMap()只能展开一层数组
console.log([1, 2, 3, 4].flatMap(x => [[x * 2]]));
// 相当于
console.log([[[2]], [[4]], [[6]], [[8]]].flat());
/**
 * flatMap()方法的参数是一个遍历函数,该函数可以接受三个参数,分别是当前数组成员、当前数组成员的位置(从零开始)、原数组
 * 
 * arr.flatMap(function callback(currentValue[,index[,array]])){
 *   //...
 * }[,thisArg])
 * 
 * flatMap()方法还可有第二个参数,用来绑定遍历函数里面的this
 */