

nction mix(s1, s2) {
  const alphabetList = [...`abcdefghijklmnopqrstuvwxyz`];

  return alphabetList
    .map((char) => {
      const s1Counter = [...s1].filter((e) => e === char).length;
      const s2Counter = [...s2].filter((e) => e === char).length;
      const maxCounter = Math.max(s1Counter, s2Counter);

      return {
        char: char,
        num: maxCounter,
        from: s1Counter > s2Counter ? `1` : s1Counter < s2Counter ? `2` : `=`,
      };
    })
    .filter((e) => e.num > 1)
    .map((e) => `${e.from}:${e.char.repeat(e.num)}`)
    .sort()
    .sort((a, b) => b.length - a.length)
    .join(`/`);
}

console.log(mix("Are they here", "yes, they are here"));
