// Symbol.iterator方法的最简单实现，还是使用Generator函数。
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
}
console.log([...myIterable]);

let obj = {
  *[Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};
for (let x of obj) {
  console.log(x);
}
// 上面代码中，Symbol.iterator方法几乎不用部署任何代码，只要用yield命令给出每一步的返回值即可。