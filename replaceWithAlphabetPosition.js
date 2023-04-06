function alphabetPosition(text) {
  const newArray = [...text]
    .filter((n) => /[a-zA-Z]/.test(n))
    .map((n) => n.toLowerCase().charCodeAt(0) - 96);
  return newArray.join(` `);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
