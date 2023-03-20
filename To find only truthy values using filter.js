function removeFalseValue(arr) {
  return arr.filter((item) => {
    return item;
  });
}
console.log(
  removeFalseValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9])
); //["priya","ate",9]
