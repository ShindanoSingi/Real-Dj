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

  if (stringNumber.length === 1) {
    return true
  }

  if (stringNumber.length < 3) {
    if (stringNumber.charAt(0) === stringNumber.charAt(1)) {
      return true
    }
    return false
  } else {
    if (stringNumber.length % 2 === 0) {
      let arr1 = stringNumber.slice(0, stringNumber.length / 2)
      let arr2 = stringNumber.slice(
        stringNumber.length / 2,
        stringNumber.length
      )
      let arr2Reverse = arr2.split("").reverse().join("")
      return arr2Reverse === arr1
    }
    if (stringNumber.length % 2 !== 0) {
      let arr1 = stringNumber.slice(0, stringNumber.length / 2)
      let arr2 = stringNumber.slice(
        stringNumber.length / 2 + 1,
        stringNumber.length
      )
      let arr2Reverse = arr2.split("").reverse().join("")
      return arr2Reverse === arr1
    }
  }
}
// console.log(palindrome(10))

// Roman to numbers
function romanToInt(rom) {
  let arrayString = rom.toUpperCase().split("")

  let arrString = ["I", "V", "X", "L", "C", "D", "M"]
  let arrNumber = [1, 5, 10, 50, 100, 500, 1000]

  console.log(arrayString)
}
let str = "lv"
romanToInt(str)
// console.log(romanToInt(str))
