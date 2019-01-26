let p = {
  a: 'a'
};
let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value);
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};
let obj = new Proxy(p, handler);
obj.a = 'A';
// 如果第一个参数不是对象,Reflect.set会报错.