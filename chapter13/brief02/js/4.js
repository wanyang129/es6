const proxy = new Proxy({}, {
  get: function (target, property, receiver) {
    return receiver;
  }
});
// proxy对象的getReceiver属性是由proxy对象提供的,所以receiver指向proxy对象
console.log(proxy.getReceiver === proxy);