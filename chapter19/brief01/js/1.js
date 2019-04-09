// async函数就是Generator函数的语法糖
// Generator函数,依次读取两个文件
const fs = require('fs');
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error)
        return reject(error);
      resolve(data);
    });
  });
}
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
// 上面代码的函数gen可以写成async函数,就是下面这样
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
// 一比较就会发现,async函数就是将Generator函数的星号(*)替换成async,将yield替换成await,仅此而已
/**
 * async函数对Generator函数的改进,体现在以下四点.
 * 1.内置执行器
 *  Generator函数的执行必须靠执行器,所以才有了co模块,而async函数自带执行器.
 *  也就是说,async函数的执行,与普通函数一样,只要一行.
 *  asyncReadFile();
 *  上面的代码调用了asyncReadFile函数,然后它就会自动执行,输出最后结果.
 *  这完全不像Generator函数,需要调用next方法,或者用co模块,才能真正执行,得到最后结果.
 * 2.更好的语义
 *  async和await,比起星号和yield,语义更清楚了.async表示函数里有异步操作,await表示紧跟在后面的表达式需要等待结果.
 * 3.更广的适用性
 *  co模块约定,yield命令后面只能是Thunk函数或Promise对象,
 *  而async函数的await命令后面,可以是Promise对象和原始类型的值(数值、字符串和布尔值,但这时会自动转成立即resolved的Promise对象)
 * 4.返回值是Promise
 *  async函数的返回值是Promise对象,这比Generator函数的返回值是Iterator对象方便多了.
 *  你可以用then方法指定下一步操作.
 *  进一步说,async函数完全可以看作多个异步操作,包装成的一个Promise对象,而await命令就是内部then命令的语法糖
 */