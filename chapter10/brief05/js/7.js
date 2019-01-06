const obj = {
  foo: 'bar',
  baz: 42
};
console.log(Object.entries(obj));

console.log(Object.entries({ [Symbol()]: 123, foo: 'abc' }));

let obj1 = {
  one: 1,
  two: 2
};
for (let [k, v] of Object.entries(obj1)) {
  console.log(`${JSON.stringify(k)}:${JSON.stringify(v)}`);
}

const map = new Map(Object.entries(obj));
console.log(map);

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

function entries(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }
  return arr;
}