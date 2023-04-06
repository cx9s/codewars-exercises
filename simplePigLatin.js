function pigIt(str) {
  return str
    .split(` `)
    .map((elem) => {
      if (/^[a-zA-Z]/.test(elem)) {
        return elem.slice(1) + elem[0] + `ay`;
      } else return elem;
    })
    .join(` `);
}

console.log(pigIt("Pig latin is cool"));
