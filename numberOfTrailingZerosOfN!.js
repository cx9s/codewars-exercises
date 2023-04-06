function zeros(n) {
  let num = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    num += Math.floor(n / i);
  }
  return num;
}

console.log(zeros(30));
