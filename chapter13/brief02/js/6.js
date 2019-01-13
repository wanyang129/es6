const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  },
});
const handler = {
  get(target, propKey) {
    // return 'abc';
    return target[propKey];
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);