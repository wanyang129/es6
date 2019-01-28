function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(100).then((value) => {
  console.log(value);
});
// Promise新建后就会立即执行
let promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});
promise.then(function () {
  console.log('resolved');
});
console.log('Hi!');
// 上面代码中，Promise新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数,将在当前脚本所有同步任务执行完才会执行,所以resolved最后输出.
function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}

const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(thi.statusText));
      }
    }
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });
  return promise;
}
getJSON("/posts.json").then(function (json) {
  console.log("Contents:" + json);
}, function (error) {
  console.error("出错了", error);
});