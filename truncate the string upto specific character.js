function truncateString(str, num) {
  if (num <= 3) return str.slice(0, num);
  return str.slice(0, num - 3) + "..."; //retuen only 4 digits thats why subtracted from 3
}
console.log(truncateString("priyabagde", 2)); //pr
console.log(truncateString("priyabagde", 4)); //p... //retuen only 4 digits
