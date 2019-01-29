/**
 * Promise实例具有then方法,也就是说,then方法是定义在原型对象Promise.prototype上的.
 * 它的作用是为Promise实例添加状态改变时的回调函数.
 * then方法的第一个参数是resolved状态的回调函数,第二个参数(可选)是rejected状态的回调函数.
 * 
 * then方法返回的是一个新的Promise实例(不是原来那个Promise实例).
 * 因此可以采用链式写法,即then方法后面再调用另一个then方法.
 */
getJSON("/posts.json").then(function (json) {
  return json.post;
}).then(function (post) {
  // 
});
getJSON("post/1.json").then(function (post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log("resolved: ", comments);
}, function funcB(err) {
  console.log("rejected: ", err);
});

getJSON("/post/1.json").then(post => getJSON(post.commentURL)).then(comments => console.log("resolved: ", comments), err => console.log("rejected: ", err));