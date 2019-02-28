/**
 * Generator函数的暂停执行效果,意味着可以把异步操作写在yield表达式里面,
 * 等到调用next方法时再往后执行.
 * 这实际上等同于不需要写回调函数了,因为异步操作的后续操作可以放在yield表达式下面,
 * 反正要等到调用next方法时在执行.
 * 所以,Generator函数的一个重要实际意义就是用来处理异步操作,改写回调函数.
 */
function* loadUI() {
  showLoadingscreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next();
// 卸载UI
loader.next();

// ajax是典型的异步操作,通过Generator函数部署ajax操作,可以用同步的方式表达.
function* main() {
  var result = yield request('http://some.url');
  var resp = JSON.parse(result);
  console.log(resp.value);
}
function request(url) {
  makeAjaxCall(url, function (response) {
    it.next(response);
  })
}
var it = main();

// 通过Generator函数逐行读取文本文件
function* numbers() {
  let files = new FileReader('numbers.txt');
  try {
    while (!file.eof) {
      yield parseInt(file.readLine(), 10);
    }
  } finally {
    file.close();
  }
}