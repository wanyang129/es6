const a1 = [1, 2];
const [...a2] = a1;
console.log("a1", a1);
console.log("a2", a2);
a2[0] = 4;
console.log("a1 after", a1);
console.log("a2 after", a2);