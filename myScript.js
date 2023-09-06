function add2Num(a, b) {
  let result = [];
  for (let index = 0; index < a.length; index++) {
    result[index] = a[index] + b[index];
  }
  for (let index = 0; index < result.length; index++) {
    if (result[index] > 9) {
      if (result[index] > 9) {
        result[index] = result[index] % 10;
        Math.floor(result[index + 1] + (result[index] /= 10));
      } 
    } 
  }
  return result
}

console.log(add2Num([2,12,7, 1],[5,12,6, 2]))