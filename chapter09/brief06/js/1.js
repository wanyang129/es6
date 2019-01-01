const [a, ...b] = [1, 2, 3];
console.log(a);
console.log(b);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);
console.log(y);
console.log(z);