global._foo = { foo: 'world' };
const a = require('./mod.js');
console.log(a.foo);