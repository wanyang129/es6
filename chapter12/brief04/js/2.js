// WeakMap弱引用的只是键名,而不是键值.键值依然是正常引用
const wm = new WeakMap();
let key = {};
let obj = { foo: 1 };

wm.set(key, obj);
obj = null;
console.log(wm.get(key));