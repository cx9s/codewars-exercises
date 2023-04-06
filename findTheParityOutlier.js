function findOutlier(integers) {
  const odd = integers.filter((i) => i % 2 !== 0);
  const even = integers.filter((i) => i % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([2, 6, 8, 10, 3]));
