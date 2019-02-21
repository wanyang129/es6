const shapeType = {
  triangle: Symbol()
};
function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}
console.log(getArea(shapeType.triangle, { width: 100, height: 100 }));