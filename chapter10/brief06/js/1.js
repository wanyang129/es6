// Object.fromEntries()是Object.entries()的逆操作,用于将一个键值对数组转为对象
console.log(Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
]));

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
console.log(Object.fromEntries(entries));

const map = new Map().set('foo', true).set('bar', false);
console.log(Object.fromEntries(map));

Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'));