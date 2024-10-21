// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,0,31)
let myCreatedDate = new Date(2024,0,31,5,3)
// console.log(myCreatedDate)

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday: "long",
    
})