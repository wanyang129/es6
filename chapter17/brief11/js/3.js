// 利用Generator函数,可以在任意对象上部署Iterator接口
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}
let myObj = { foo: 3, bar: 7 };
for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}
/**
 * 上述代码中,myObj是一个普通对象,通过iterEntries函数,就有了Iterator接口.
 * 也就是说,可以在任意对象上部署next方法.
 */

function* makeSimpleGenerator(array) {
  var nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}
var gen = makeSimpleGenerator(['yo', 'ya']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);