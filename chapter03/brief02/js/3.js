let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz);
let obj = { first: "hello", last: "world" };
let { first: f, last: l } = obj;
console.log(f);
console.log(l);