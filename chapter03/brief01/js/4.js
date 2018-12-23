// 对于Set结构,也可以使用数组的结构赋值
let [x, y, z] = new Set(["a", "b", "c"]);
console.log(x);
// 事实上,只要某种数据结构具有Iterator接口,都可以采用数组形式的解构赋值.
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);