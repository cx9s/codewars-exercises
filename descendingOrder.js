function descendingOrder(n) {
  return n < 10 ? n : +[...n.toString()].sort((a, b) => +b - +a).join("");
}

console.log(descendingOrder(133452));
