// Promise对象是一个构造函数,用来生成Promise实例.
const promise = new Promise(function (resolve, reject) {
  if (true/* 异步操作成功 */) {
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(function (value) {
  // success
}, function (error) {
  // failure
})