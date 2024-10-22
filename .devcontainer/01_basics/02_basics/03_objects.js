// singleton
// object literals
// Object.create    // constructor method k through or isi k andar singleton anata hai

const mySym = Symbol("key1")
const JsUser = {
    name: "Anshu",
    "full name" : "Anshu Goyal",
    [mySym] : "mykey1",
    age : 21,
    location : "Haryana",
    email : "anshu@google.com",
    isLoggedIn : "False",
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "anshu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "anshu@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user")
}
JsUser.greetingtwo = function(){
    console.log('Hello js user,${this.name}') //string interpulation
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())