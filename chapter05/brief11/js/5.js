let regex = /^(\d{4})-(\d{2})-(\d{2})$/;
'2015-01-02'.replace(regex, (match, $1, $2, $3) => {
  console.log("arguments");
  console.log(match);
  console.log($1);
  console.log($2);
  console.log($3);
})
console.log('2015-01-02'.replace(regex, "$3 / $2 / $1"));
