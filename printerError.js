const printerError = (s) => {
  return `${[...s].filter((letter) => !letter.match(/[a-m]/)).length}/${
    s.length
  }`;
};

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
