function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  customers.forEach((customer) => {
    const tillNumber = tills.indexOf(Math.min(...tills));
    tills[tillNumber] += customer;
  });

  return Math.max(...tills);
}

console.log(queueTime([10, 2, 3, 3], 2));
