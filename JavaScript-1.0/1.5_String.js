
// *********string*********

const name ="munim"
const repoCount = 50

console.log(`Hello my name is ${name} and repo count is ${repoCount}`)

// *****another type write string*******

const gameName = new String("MunimKhan")
console.log(gameName[8])             // character investigation
console.log(gameName.__proto__);     // {}

console.log(gameName.length)         // name length
console.log(gameName.toUpperCase())  // upper case
console.log(gameName.charAt(5))      // character investigation
console.log(gameName.indexOf('K'))   // character number

const newString = gameName.substring(0, 7)  // output-MunimKh
console.log(newString)

const newStringOne = "      munim     "
console.log(newStringOne);
console.log(newStringOne.trim());    // space remove