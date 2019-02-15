// 对于类似数组的对象（存在数值键名和length属性），部署Iterator接口，有一个简便方法，就是Symbol.iterator方法直接引用数组的Iterator接口
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
[...document.querySelectorAll('div')]
// NodeList对象是类似数组的对象，本来就具有遍历接口，可以直接遍历。