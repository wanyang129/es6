var p = new Proxy({}, {
  isExtensible: function (target) {
    console.log("called");
    return false;
  }
});
console.log(Object.isExtensible(p));