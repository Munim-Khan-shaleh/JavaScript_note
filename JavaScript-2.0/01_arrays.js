
// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])

// myArr.push(6)
// myArr.push(9)          // add number
// myArr.pop(3)           // last number out
// myArr.unshift(9)          // start add number
// myArr.shift()           // start add number has gone


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// le.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// slice, splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1, 3)  // 
console.log("c", myArr)
console.log(myn2)
