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
  let arrayStringRoman = rom.toUpperCase().split("")
  // console.log(arrayStringRoman)
  let arrString = ["I", "V", "X", "L", "C", "D", "M"]
  let arrNumber = [1, 5, 10, 50, 100, 500, 1000]

  for (let i = 0; i < arrayStringRoman.length; i++) {
    // console.log(arrayString[i])
    // console.log(arrString.includes(arrayString[i]))
    if (!arrString.includes(arrayStringRoman[i])) return false
    else if (arrayStringRoman.length < 1) {
      return false
    } else if (arrayStringRoman.length === 1) {
      return arrNumber[arrString.indexOf(arrayStringRoman[i])]
    } else {
      if (arrayStringRoman[i] === arrayStringRoman[i + 1]) {
        console.log(arrayStringRoman[i])

        // console.log("Yes, they are equal.")
        return (
          arrNumber[arrString.indexOf(arrayStringRoman[i])] *
          arrayStringRoman.length
        )
      } else {
        const newRomanString = rom.toUpperCase().split("")
        console.log(newRomanString)
      }
    }
  }
}
let str = "vv"
// romanToInt(str)
console.log(romanToInt(str))
