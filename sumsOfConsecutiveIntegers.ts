function position(x: number, y: number, n: number) {
  let added = 0;
  for (let i = x - 1; i > 0; i--) {
    added += i;
  }
  const init = (y - added) / x;
  return init + n;
}

console.log(position(4, 14, 3));
