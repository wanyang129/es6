const m = new Map();
m.set(undefined, 'nah');
console.log(m.has(undefined));

m.delete(undefined);
console.log(m.has(undefined));