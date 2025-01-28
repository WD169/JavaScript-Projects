// Interger conversion
let number = 33
let num2 = 33
let stringNum = String(number)
let boolNum = Boolean(num2)
console.log([number,stringNum])
console.log([typeof number,typeof stringNum])
console.log(boolNum)
console.log("-----------------------------------------")
/*
Integer can be converted to
number --> o/p : NaN (Not a Number)
number can be converted to boolean 0 --> false, any num --> true
*/

//String conversion
let varString = "Chinu169"
let varString2 = ""
let numString = Number(varString)
let boolString = Boolean(varString)
console.log([varString,numString])
console.log([typeof varString,typeof numString])
console.log(boolString)
console.log("-----------------------------------------")
/*
 string can be converted to number if value is number else o/p will be NaN
 Any value present then boolean will return true if it is empty it returns false
*/


//Boolean conversion
let varBool = true
let numBool = Number(varBool)
let stringBool = String(varBool)
console.log([numBool,stringBool])
console.log([typeof numBool,typeof stringBool])
console.log("-----------------------------------------")
/*
Boolean can be converted to string 
Boolean value false ---> 0, true ---> 1 while converted to number
*/