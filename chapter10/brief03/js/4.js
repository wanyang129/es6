let mix = (object) => ({
  with: (...mixins) => mixins.reduce((c, mixin) => Object.create(c, Object.getOwnPropertyDescriptors(mixin)), object)
});
let a = { a: 'a' };
let b = { b: 'b' };
let c = { c: 'c' };
let d = mix(c).with(a, b);
console.log(d);
console.log(d.c);
console.log(d.b);
console.log(d.a);