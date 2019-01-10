const m = new Map();
const hello = function () {
  console.log('hello');
};
m.set(hello, 'Hello ES6!');
console.log(m.get(hello));