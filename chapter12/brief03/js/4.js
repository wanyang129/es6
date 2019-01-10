// 只有对同一个对象的引用,Map结构才将其视为同一个键.
const map = new Map();
map.set(['a'], 555);
console.log(map.get(['a']));

const map2 = new Map();
const k1 = ['a'];
const k2 = ['a'];

map2.set(k1, 111).set(k2, 222);
console.log(map2.get(k1));
console.log(map2.get(k2));
// Map的键实际上是个跟内存地址绑定的.