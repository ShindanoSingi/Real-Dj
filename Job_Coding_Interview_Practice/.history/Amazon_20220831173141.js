// 1. Recursion
function sum(n) {
  n = n - 1
  if (n === 0) return 0
  return n + sum(n / 2)
}
const sums = sum(8)
console.log(sums)
