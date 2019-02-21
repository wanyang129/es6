let mySymbol = Symbol();

let a = {};
a[mySymbol] = 'Hello!';

// let a = {
//   [mySymbol]: 'Hello!'
// };

// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });

console.log(a[mySymbol]);