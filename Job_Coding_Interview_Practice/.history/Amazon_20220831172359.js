function sum(n) {
  if (n === 0) return 0
  return n + sum(n - 1)
}

const sums = sum(3)
console.log(sums)
