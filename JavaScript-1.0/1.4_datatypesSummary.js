//  Primitive
//        7 types : String, Number, Boolean, Null, Undefined, Symbol, BinInt


                           // (Value)   
const score = 100          // number
const scorevalue = 100.3   // number
const isLoggedIn = false   // boolean
const outsideTemp = null   // null(Empty)
let userEmail;             // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 32457340957830n  // Big number


//  Reference (Non primitive)
//        Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: "22",
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);