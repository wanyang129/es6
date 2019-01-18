// ownKeys方法还可以拦截Object.getOwnPropertyNames()
var p = new Proxy({}, {
  ownKeys: function (target) {
    return ['a', 'b', 'c'];
  }
});
console.log(Object.getOwnPropertyNames(p));
// for...in循环也受到ownKeys方法的拦截
const obj = {
  hello: "world"
};
const proxy = new Proxy(obj, {
  ownKeys: function () {
    return ["a", "b"];
  }
});
for (let key in proxy) {
  console.log(key);
}