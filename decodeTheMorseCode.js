const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

decodeMorse = function (morseCode) {
  let res = ``;
  const arr = morseCode.trim().split(`   `);
  arr.forEach((word) => {
    const wordArr = word.split(` `);
    wordArr.forEach((char) => {
      res += MORSE_CODE[char];
    });
    res += ` `;
  });

  return res.trim().toLocaleUpperCase();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
