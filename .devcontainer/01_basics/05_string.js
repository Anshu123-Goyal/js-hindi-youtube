const name = "anshu"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');  

const gameName = new String('anshu-abc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u'));

const newString =  gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    anshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anshu.com/anshu%31goyal"


console.log(url.replace('%31','-'))

console.log(url.includes('anshu'))

console.log(gameName.split('-'))
