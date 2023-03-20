function repeatStrinNumTimes(str, num) {
  if (num < 0) return "";
  if (num === 1) return str;

  return str + repeatStrinNumTimes(str, num - 1);
}
console.log(repeatStrinNumTimes("priya", 5));
