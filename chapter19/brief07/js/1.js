// 异步遍历器的最大的语法特点，就是调用遍历器的next方法，返回的是要给Promise对象
// asyncIterator.next().then(({ value: done }) =>/** */);
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next().then(iterResult1 => {
  console.log(iterResult1);
  return asyncIterator.next();
}).then(iterResult2 => {
  console.log(iterResult2);
  return asyncIterator.next();
}).then(iterResult3 => {
  console.log(iterResult3);
});
async function f() {
  const asyncIterable = createAsyncIterable(['a', 'b']);
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  console.log(await asyncIterator.next());
  console.log(await asyncIterator.next());
  console.log(await asyncIterator.next());
}
/**
 * 异步遍历器的next方法是可以连续调用的，不必等到上一步产生的Promise对象resolve以后再调用。
 * 这种情况下，next方法会累积起来，自动按照每一步的顺序运行下去。
 */
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
const [{ value: v1 }, { value: v2 }] = await Promise.all([
  asyncIterator.next(), asyncIterator.next()
]);
console.log(v1, v2);
async function runner() {
  const writer = openFile('someFile.txt');
  writer.next('hello');
  writer.next('world');
  await writer.return();
}
runner();
// for...of循环用于遍历同步的Iterator接口。for await...of循环则是用于遍历异步的Iterator接口。
async function f() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x);
  }
}