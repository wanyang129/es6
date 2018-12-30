function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  });
}
var a = [];
push(a, 1, 2, 3);
// rest参数之后不能再有其他参数(即只能是最后一个参数),否则会报错
function f(a, ...b, c) {

}