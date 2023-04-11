function nbYear(p0, percent, aug, p) {
  //   console.log(...arguments);
  let n = 0;
  let pn = p0;
  const calculatePn = (pStart, percent, aug) => {
    return Math.floor(pStart * (1 + percent / 100) + aug);
  };
  while (pn < p) {
    pn = calculatePn(pn, percent, aug);
    n++;
  }
  return n;
}

console.log(nbYear(1000, 2, 50, 1214));
