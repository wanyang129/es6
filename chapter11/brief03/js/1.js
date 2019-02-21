// 魔术字符串指的是,在代码之中多次出现,与代码形成强耦合的某一个具体的字符串或者数值.
function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case 'Triangle':
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}
console.log(getArea('Triangle', { width: 100, height: 100 }));