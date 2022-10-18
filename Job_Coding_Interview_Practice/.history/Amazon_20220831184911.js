// 1. Recursion
function sum(n) {
  if (n === 0) return 0
  return n + sum(n - 1)
}
const sums = sum(10000)
// console.log(sums)

// 2. Search
function search(n, array) {
  if (array.includes(n)) return true
  return false
}
let arr = [1, 5, 8, 9, 11, 13, 15, 19, 21]
// console.log(search(2, arr))

// Fibonacci
function fibonacci(n) {
  if (n === 0) return 0
  else if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(9))

// Palindrome
function palindrome(n) {
  const stringNumber = n.toString()
  let arr1 = stringNumber.slice(0, stringNumber.length / 2)
  let arr2 = stringNumber.slice(stringNumber.length / 2, stringNumber.length)
  // for (let i = 0; i < stringNumber.length; i++) {
  //   if (
  //     stringNumber.charAt(i) ===
  //     stringNumber.charAt(stringNumber.length - i - 1)
  //   ) {
  //     arr.push(true)
  //   } else {
  //     arr.push(false)
  //   }
  //   // return arr.includes(false)
  // }
  // return stringNumber.charAt(0) === stringNumber.charAt(stringNumber.length - 1)
  console.log(arr2)
}
// console.log(palindrome(121))
palindrome(121)
