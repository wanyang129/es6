let x = 1;
function f(y = x) {
  let x = 2;
  console.log(y);
}
f();