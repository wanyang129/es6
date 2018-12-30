// 由于箭头函数没有自己的this,所以当然也不能用call()、apply()、bind()这些方法去改变this的指向
(function () {
  return [
    (() => this.x).bind({ x: 'inner' })()
  ];
}).call({ x: 'outer' });