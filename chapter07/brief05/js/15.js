let insert = (value) => ({
  intro: array => ({
    after: afterValue => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }
  })
});
console.log(insert(2).intro([1, 3]).after(1));