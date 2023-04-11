const longest = (s1, s2) => {
  //   const result = [];
  //   const assemble = (s, res) => {
  //     [...s].forEach((char) => {
  //       if (!res.includes(char)) res.push(char);
  //     });
  //   };
  //   assemble(s1, result);
  //   assemble(s2, result);
  //   return result.sort().join("");

  return (result = [...new Set(s1 + s2)].sort().join(""));
};

console.log(longest("aretheyhere", "yestheyarehere"));
