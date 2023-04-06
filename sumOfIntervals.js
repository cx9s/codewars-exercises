function sumIntervals(intervals) {
  let res = 0;
  const newInts = intervals.sort(([a, b], [c, d]) => a - c);
  console.log(newInts);
  let flag = intervals[0][0];
  newInts.forEach(([a, b]) => {
    if (flag < a) {
      res += b - a;
      flag = b;
    } else if (a <= flag && flag <= b) {
      res += b - flag;
      flag = b;
    }
  });
  return res;
}

console.log(
  sumIntervals([
    [3, 7],
    [-17, -10],
    [-7, -5],
    [17, 22],
    [-9, -8],
    [11, 18],
    [4, 10],
    [7, 13],
    [-3, 1],
    [-2, 0],
    [0, 1],
  ])
);
