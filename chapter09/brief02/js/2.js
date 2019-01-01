// es6允许字面量定义对象时,用表达式作为对象的属性名,即把表达式放在方括号内
let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
let lastWord = 'last word';
const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};
console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);
