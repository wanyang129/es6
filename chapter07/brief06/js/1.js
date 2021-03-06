/**
 * 箭头函数可以绑定this对象,大大减少了显示绑定this对象的写法(call、apply、bind).
 * 但是,箭头函数并不适用于所有场合,所以,提出了函数绑定运算符,用来取代call、apply、bind调用
 * 
 * 函数绑定运算符是并排的两个冒号(::),双冒号左边是一个对象,右边是一个函数.
 * 该运算符会自动将左边的对象,作为上下文环境(即this对象),绑定到右边的函数上面
 */
// foo::bar;
// bar.bind(foo);
// foo::bar(...arguments);
// bar.apply(foo,arguments);

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  // return obj:: hasOwnProperty(key);
  return hasOwnProperty.call(obj, key);
}
// 如果双冒号左边为空,右边是一个对象的方法,则等于将该方法绑定在该对象上面
// var method=obj::obj.foo;
// var method=::obj.foo;

// var log =:: console.log;
// var log = console.log.bind(console);

// 如果双冒号运算符的运算结果,还是一个对象,就可以采用链式写法.
// import {map,takeWhile,forEach} from 'iterlib';
// getPlayers()
// ::map(x=>x.character())
// ::takeWhile(x=>x.strength>100)
// ::forEach(x=>console.log(x));