// 表达式还可以用于定义方法名
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
}
console.log(obj.hello());
// 属性名表达式与简介表示法,不能同时使用,会报错
const foo = 'bar';
const bar = 'abc';
// const baz = { [foo]};
const baz = { [foo]: 'abc' };