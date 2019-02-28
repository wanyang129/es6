/**
 * Generator可以看作是数据结构,更确切的说,可以看作是一个数组结构,
 * 因为Generator函数可以返回一系列的值,这意味着它可以对任意表达式,
 * 提供类似数组的接口.
 */
function* doStuff() {
  yield fs.readFile.bind(null, 'hello.txt');
  yield fs.readFile.bind(null, 'world.txt');
  yield fs.readFile.bind(null, 'and-such.txt');
}
for (task of doStuff()) {

}
function doStuff() {
  return [
    fs.readFile.bind(null, 'hello.txt'),
    fs.readFile.bind(null, 'world.txt'),
    fs.readFile.bind(null, 'and-such.txt')
  ]
}