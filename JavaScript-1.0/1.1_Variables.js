const accountId = 93457
let accountEmail = "munim@gmail.com"
var accountPassword = "12234"
accountCity = "Jaipur"
let accountState; // Undefined

// accountId = 2 // not allowed

console.log(accountId)

accountEmail = "adibkhan@gmail.com"
accountPassword = "212121"
accountCity = "Barguna"


// console.log (accountId);
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ])


/* 
Prefer not to use var
because of issue in block scope and functional sc
*/