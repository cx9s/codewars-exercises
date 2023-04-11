const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return [...str].filter((letter) => vowels.includes(letter)).length;
};

console.log(getCount("abracadabra"));
