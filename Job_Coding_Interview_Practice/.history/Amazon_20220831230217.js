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
  // console.log(arrayStringRoman.length)
  let arrHash = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  let array1 = []
  let acc = 0
  for (const i in arrayStringRoman) {
    console.log(arrayStringRoman[i])
    if (arrayStringRoman.includes(i)) {
      acc += arrHash[i]
    } else {
      acc += 0
    }
    // for (let i = 0; i < arrHash.length; i++) {

    //   // console.log(arrayStringRoman)
    //   // console.log(arrString.includes(arrayString[i]))
    // if (!arrString.includes(arrayStringRoman[i])) {
    //     return false
    //   } else if (arrayStringRoman.length < 1) {
    //     return false
    //   } else if (arrayStringRoman.length === 1) {
    //     return arrNumber[arrString.indexOf(arrayStringRoman[i])]
    //   } else {
    //     let temp = arrNumber[arrString.indexOf(arrayStringRoman[i])]
    //     let max = arrNumber[arrString.indexOf(arrayStringRoman[i + 1])]
    //     if (temp > max) {
    //       max = temp
    //     }
    //     console.log(temp, max)
    //     console.log(max)
    //     // return (
    //     //   arrNumber[arrString.indexOf(arrayStringRoman[i])] *
    //     //   arrayStringRoman.length
    //     // )
    //   }
  }
  return acc
}
let str = "iii"
console.log(romanToInt(str))
