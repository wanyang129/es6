// super关键字表示原型对象时,只能用在对象的方法之中,用在其他地方都会报错
// const obj = {
//   foo: super.foo
// };

// const obj = {
//   foo: () => super.foo
// }

// const obj = {
//   foo: function () {
//     return super.foo
//   }
// }