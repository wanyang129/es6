// Object.is()用来比较两个值是否严格相等,与严格比较运算符(===)的行为基本一致
console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));

console.log({} === {});
// 不同之处只有两个,一个是+0不等于-0,二是NaN等于自身
console.log("+0===-0", +0 === -0);
console.log("NaN===NaN", NaN === NaN);

console.log("Object.is(+0,-0)", Object.is(+0, -0));
console.log("Object.is(NaN,NaN)", Object.is(NaN, NaN));

// es5可以通过下面的代码,部署Object.is
Object.defineProperty(Object, 'is', {
  value: function (x, y) {
    if (x === y) {
      // 针对+0不等于-0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});