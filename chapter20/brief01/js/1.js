// JavaScript语言中,生成实例对象的传统方法是通过构造函数.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')';
};
var p = new Point(1, 2);