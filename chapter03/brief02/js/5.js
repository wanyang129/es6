let obj = {
  p: [
    "Hello",
    { y: "World" }
  ]
};
let { p, p: [x, { y }] } = obj;
console.log(x);
console.log(y);
console.log(p);

const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
let { loc, loc: { start }, loc: { start: { line } } } = node;
console.log(line);
console.log(loc);
console.log(start);
