// Primitive(Call by value:when copy data not original to changes)

// 7 types: String,Number,Boolean,Null(Empty),Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// const bigNumber = 70827701415427n

// Reference (Non Primitive):Memory m reference directly allocate kiya ja skta hai...

// Array, Objects, Functions

const heros = ["shaktiman","nagraj","doga"];//array
let myObj= {   
    name :"anshu",    // object
    age :21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);


// *******************************************

//   Stack(Primitive), Heap(Non primitive)


let myYoutubeName = "anshugoyal.com"

let anotherName = myYoutubeName
anotherName ="chai aur code"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anshu@google.com"

console.log(userOne.email)
console.log(userTwo.email)