// 使用get拦截,实现数组读取负数的索引.
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };
  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
// 利用Proxy,可以将读取属性的操作(get),转变为执行某个函数,从而实现属性的链式操作.
var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({}, {
      get: function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          }, value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });
    return oproxy;
  }
}());
var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
console.log(pipe(3));
console.log(pipe(3).double.pow.reverseInt.get);

const dom = new Proxy({}, {
  get(target, property) {
    return function (attrs = {}, ...children) {
      const el = document.createElement(property);
      for (let prop of Object.keys(attrs)) {
        el.setAttribute(prop, attrs[prop]);
      }
      for (let child of children) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }
      return el;
    }
  }
});

const el = dom.div({},
  'Hello,my name is ',
  dom.a({ href: '//example.com' }, 'Mark'),
  '.I like:',
  dom.ul({},
    dom.li({}, 'The web'),
    dom.li({}, 'Food'),
    dom.li({}, '...actually that\'s it')));
document.body.appendChild(el);