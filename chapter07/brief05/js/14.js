// 箭头函数内部,还可以再使用箭头函数.
function insert(value) {
  return {
    intro: function (array) {
      return {
        after: function (afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value);
          return array;
        }
      }
    }
  }
}
console.log(insert(2).intro([1, 3]).after(1));