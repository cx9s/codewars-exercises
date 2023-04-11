function positiveSum(arr) {
  //   return arr.reduce((a, b) => {
  //     return b > 0 ? a + b : a;
  //   }, 0);

  return arr.filter((n) => n > 0).reduce((a, b) => a + b, 0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));
