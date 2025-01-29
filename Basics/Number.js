const score = 100
const balance = 50
 
const value = new Number(169.8676845)
console.log(value.toFixed())         //Round off
console.log(value.toPrecision(5))
console.log(value.toExponential())
console.log(value.valueOf())


const num = 10000000000
console.log(num.toLocaleString('en-In'))


// Math
console.log(Math)
console.log(Math.max(2,3,4,7,8,9))
console.log(Math.min(34,56,876648,434,-12,0,-90))
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+1)

let num1 = 50
let num2 = 100
console.log(Math.floor(Math.random()*(num2-num1+1))+num1)  //Random number in range 50 - 100
