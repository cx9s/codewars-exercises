function isValidWalk(walk) {
  const counter = { n: 0, e: 0, s: 0, w: 0 };
  walk.forEach((step) => counter[step]++);
  return walk.length === 10 &&
    counter.n === counter.s &&
    counter.e === counter.w
    ? true
    : false;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
