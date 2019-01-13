const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false
});
const handler = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};
const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
console.log(proxy.foo);