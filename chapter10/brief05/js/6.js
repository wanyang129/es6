const obj = Object.create({}, {
  p: {
    value: 42,
    enumerable: true
  }
});
console.log(Object.values(obj));
// Object.values()会过滤属性名为Symbol值的属性.
console.log(Object.values({ [Symbol()]: 123, foo: 'abc' }));
// 如果Object.values方法的参数是一个字符串,会返回各个字符串组成的一个数组.
console.log(Object.values('foo'));
console.log(Object.values(42));
console.log(Object.values(true));