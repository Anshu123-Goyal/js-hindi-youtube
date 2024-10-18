const accountId = 3107
let accontEmail = "anshu@google.com"
var accountPassword = "12345"
accountCity= "Jaipur"
let accountState;

// accountId = 2 // Not allowed
accontEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangalore"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accontEmail,accountPassword,accountCity,accountState])
