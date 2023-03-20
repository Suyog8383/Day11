// const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);

// Output
// [
//   ["a", "b"],
//   ["c", "d"],
// ];

function convert(arr, num) {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.slice(0, num));
    arr = arr.slice(num);
  }
  return result;
}
console.log(convert(["a", "b", "c", "d"], 2));
