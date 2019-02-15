// Iterator接口的目的,就是为所有数据结构,提供了一种统一的访问机制,即for...of循环
// 一种数据结构只要部署了Iterator接口,我们就称这种数据结构是"可遍历的"(iterable)
const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        }
      }
    }
  }
}
/**
 * 原生具备Iterator接口的数据结构如下:
 *  Array
 *  Map
 *  Set
 *  String
 *  TypedArray
 *  函数的arguments对象
 *  NodeList对象
 */