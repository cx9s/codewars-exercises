function validParentheses(parens) {
  let arr = [];

  [...parens].forEach((p) => {
    p === "("
      ? arr.push(p)
      : arr[arr.length - 1] === "("
      ? arr.pop()
      : arr.push(p);
  });
  return !arr.length;
}

console.log(validParentheses("()((())(()))"));
