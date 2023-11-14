
// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Munim",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                   // Use symbol []
    age: 23,
    location: "Dhalua",
    email: "munim@gmail.com",
    isLoggedIn: false,
    lastLogedinDays: ["Monday", "Satarday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "munim@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "munim@microsoft.com"
// console.log(JsUser)

JsUser.greeting =function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo =function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())