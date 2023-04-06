function rot13(message) {
  return [...message]
    .map((char) => {
      if (/[A-Z]/.test(char)) {
        return char.charCodeAt(0) + 13 > 90
          ? String.fromCharCode(char.charCodeAt(0) + 13 - 26)
          : String.fromCharCode(char.charCodeAt(0) + 13);
      } else if (/[a-z]/.test(char)) {
        return char.charCodeAt(0) + 13 > 122
          ? String.fromCharCode(char.charCodeAt(0) + 13 - 26)
          : String.fromCharCode(char.charCodeAt(0) + 13);
      } else return char;
    })
    .join(``);
}

console.log(rot13("test"));
