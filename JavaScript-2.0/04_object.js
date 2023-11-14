
// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Rashidul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "munim",
            lastname: "khan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 ={obj1, obj2}                   // first
// const obj3 = Object.assign(obj1, obj2)     // second
// const obj3 = Object.assign({}, obj1, obj2)    // good
const obj3 = {...obj1, obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty(`isLoggedIn`))

const {courseInstructor: instructor} = course

console.log(instructor);