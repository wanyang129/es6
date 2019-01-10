const m = new Map();
m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nan');

console.log(m.has('edition'));
console.log(m.has('years'));
console.log(m.has(262));
console.log(m.has(undefined));