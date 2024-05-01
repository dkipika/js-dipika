const accountId = 124423
let accountEmail = "payalkori012gmail.com"
var accountPassword = "dk456"
accountCity = "Mumbai"
let accountState;

//accountId = 3; // not allowed
accountEmail = "bc@123.com"
accountPassword = "123422"
accountCity = "UP"

console.log(accountId)

/*
Prefer not to use var
beacause of issuse in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
