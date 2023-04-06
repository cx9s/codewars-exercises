function removeNb(n) {
  const res = [];
  const sum = (n * (n + 1)) / 2;
  for (let i = 1; i <= n; i++) {
    if (!((sum - i) % (i + 1)) && (sum - i) / (i + 1) <= n) {
      res.push([i, (sum - i) / (i + 1)]);
    }
  }
  return res;
}

console.log(removeNb(26));
