function digitalRoot(n) {
  while (n >= 10) {
    n = [...n.toString()].reduce((a, b) => +a + +b, 0);
  }
  return n;
}

console.log(digitalRoot(456));
