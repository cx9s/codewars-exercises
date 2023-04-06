var uniqueInOrder = function (iterable) {
  return [...iterable].filter(
    (elem, index) => elem !== [...iterable][index - 1]
  );
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
