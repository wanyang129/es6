const handler = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
proxy.foo = 'bar';
console.log(proxy.foo === proxy);
// 上面代码中,set方法的的第四个参数receiver,指的是原始的操作行为所在的那个对象,一般情况下是proxy实例本身.