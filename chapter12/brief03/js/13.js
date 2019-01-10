const myMap = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log([...myMap]);

console.log(new Map([
  [true, 7],
  [{ foo: 3 }, ['abc']]
]));