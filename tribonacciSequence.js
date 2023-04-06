function tribonacci(signature, n) {
  for (let i = 3; i < n; i++) {
    signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1];
  }
  return signature.slice(0, n);
}

console.log(tribonacci([1, 2, 3], 10));
