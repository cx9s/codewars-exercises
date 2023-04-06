function digPow(n, p) {
  let sum = 0;
  const arr = [...n.toString()].forEach((digit, index) => {
    sum += digit ** (p + index);
  });
  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(46288, 3));
