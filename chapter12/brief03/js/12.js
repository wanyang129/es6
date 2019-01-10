// Map结构转为数组结构,比较快速的方法是使用扩展运算符...
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);
console.log([...map]);

// 结合数组的map方法、filter方法,可以实现Map的遍历和过滤(Map本身没有map和filter方法)
const map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
);
console.log(map1);
console.log(map2);

// Map还有一个forEach方法,与数组的forEach方法类似,也可以实现遍历
map.forEach(function (value, key, map) {
  console.log("Key:%s,Value:%s", key, value);
});
// forEach方法还可以接受第二个参数,用来绑定this
const reporter = {
  report: function (key, value) {
    console.log("Key:%s,value:%s", key, value);
  }
};
map.forEach(function (value, key, map) {
  this.report(key, value);
}, reporter);