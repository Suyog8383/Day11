function removeFalseValue(arr) {
  var trueth = [];
  for (var item of arr) {
    if (item) {
      trueth.push(item);
    }
  }
  return trueth;
}
console.log(
  removeFalseValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])
); //["priya","ate",9]
