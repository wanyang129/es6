// 由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口
/**
 * for...of
 * Array.from()
 * Map(),Set(),WeakMap(),WeakSet()比如new Map(['a',1],['b',2])
 * Promise.all()
 * Promise.race()
 */