/**
 * 作为构造函数,WeakSet可以接受一个数组或类数组的对象作为参数.
 * (实际上,任何具有Iterable接口的对象,都可以作为WeakSet的参数)
 * 该数组的所有成员,都会自动成功WeakSet实例对象的成员
 */
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws);
// a数组的成员成为weakSet的成员，而不是a数组本身。这意味着，数组的成员只能是对象。
