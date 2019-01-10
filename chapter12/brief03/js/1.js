const data = {};
const element = document.getElementById('myDiv');
data[element] = 'metadata';
console.log('data', data);
console.log('data element', data['[object HTMLDivElement]']);

const m = new Map();
const o = { p: 'Hello World!' };
m.set(o, 'content');
console.log(m.get(o));

console.log(m.has(o));
m.delete(o);
console.log(m.has(o));

const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);
console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));
console.log(map.has('title'));
console.log(map.get('title'));