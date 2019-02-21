// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
// console.log(s1 === s2);

// let s1 = Symbol('foo');
// let s2 = Symbol.for('foo');
// console.log(s1 === s2);
/**
 * Symbol.for()与Symbol(),都会生成新的Symbol.
 * 区别是,前者会比登记在全局环境中供搜索,后者不会.
 */

// console.log(Symbol.for('bar') === Symbol.for('bar'));
// console.log(Symbol('bar') === Symbol('bar'));

// Symbol.keyFor方法返回一个已登记的Symbol类型值的key
let s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1));

let s2 = Symbol('foo');
console.log(Symbol.keyFor(s2));

// Symbol.for为Symbol值登记的名字,是全局环境的,可以在不同的iframe或service worker中取到同一个值.
const iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'));