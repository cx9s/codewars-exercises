function deleteNth(arr, n) {
  const counter = {};
  return (newArr = arr.filter((elem) => {
    counter[elem] = counter[elem] + 1 || 1;
    return counter[elem] <= n;
  }));
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
