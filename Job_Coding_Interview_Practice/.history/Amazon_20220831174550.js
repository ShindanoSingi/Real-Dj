// 1. Recursion
function sum(n) {
  if (n === 0) return 0
  return n + sum(n - 1)
}
const sums = sum(10000)
console.log(sums)

// 2. Search
function search(n, array) {
  if (array.includes(n)) return true
  return false
}
