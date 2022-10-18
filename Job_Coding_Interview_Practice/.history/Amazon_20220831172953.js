// 1. Recursion
function sum(n) {
  if (n === 0) return 0
  return n + sum(n / 2 - 1)
}
const sums = sum(8)
console.log(sums)
