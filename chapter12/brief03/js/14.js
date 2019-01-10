// 如果所有Map的键都是字符串,它可以无损的转为对象
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
const myMap = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap));

function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
console.log(objToStrMap({ yes: true, no: false }));

function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

console.log(strMapToJson(myMap));

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}
let myMap2 = new Map().set(true, 7).set({ foo: 3 }, ['abc']);
console.log(mapToArrayJson(myMap2));

function jsonToStrMap(jsonStr) {
  return objToStrMap(JSON.parse(jsonStr));
}
console.log(jsonToStrMap('{"yes":true,"no":false}'));

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));