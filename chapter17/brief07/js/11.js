// yield*命令可以很方便地取出嵌套数组的所有成员。
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}
const tree = ['a', ['b', 'c'], ['d', 'e']];
// for (let x of iterTree(tree)) {
//   console.log(x);
// }

// 由于扩展运算符默认调用Iterator接口，所以上面这个函数也可以用于嵌套数组的平铺。
console.log([...iterTree(tree)]);