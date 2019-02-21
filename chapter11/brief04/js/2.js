const obj = {};
let foo = Symbol('foo');
Object.defineProperty(obj, foo, {
  value: 'foobar',
});
for (let i in obj) {
  console.log(i);
}
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));