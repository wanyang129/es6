const handler = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = receiver;
  }
};
const proxy = new Proxy({}, handler);
const myObj = {};
Object.setPrototypeOf(myObj, proxy);
myObj.foo = 'bar';
console.log(myObj.foo === myObj);