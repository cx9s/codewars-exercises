function incrementString(strng) {
  const arr = [...strng];
  let flag = arr.length;
  let endNumber = [];

  for (let i = arr.length - 1; i > -1; i--) {
    if (isNaN(arr[i])) {
      if (endNumber[0]) endNumber.unshift(0);
      break;
    } else if (+arr[i] !== 9) {
      console.log(+arr[0] !== 9);
      flag = flag - 1;
      endNumber.unshift(arr[i]);
      break;
    } else if (+arr[i] === 9) {
      flag = flag - 1;
      endNumber.unshift(arr[i]);
    }
  }

  return arr
    .slice(0, flag)
    .concat(+endNumber.join(``) + 1)
    .join(``);
}

console.log(incrementString("foobar00999"));
