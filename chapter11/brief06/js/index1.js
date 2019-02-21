// global[Symbol.for('foo')] = { foo: 'world' };
const a = require('./mod1.js');
console.log(a.foo);