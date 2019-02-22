var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
}
for (var f of flat(arr)) {
  console.log(f);
}
// yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
function* demo() {
  // console.log('Hello' +yield);
  // console.log('Hello' +yield 123);

  console.log('Hello' + (yield));
  console.log('Hello' + (yield 123));
}
// yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号。
function* demo2() {
  foo(yield 'a', yield 'b');
  let input = yield;
}