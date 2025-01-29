let name = "Chinmay Jadhav"
let age = 22

console.log(`hello I am ${name}. My age is ${age}.`)

let nameStr = new String(name)
console.log(nameStr[2])
console.log(nameStr.length)

console.log(nameStr.charAt(4))     //provides the char at position 4
console.log(nameStr.indexOf('J'))  //provides the index of char J

console.log(nameStr.split(" "))        //splits the string at the spaces and converts into array
console.log(nameStr.split("a"))

console.log(nameStr.substring(0,7))
console.log(nameStr.slice(-10, nameStr.length))   //here we can select substring in front as well as in reverse order also

let url = "http://localhost:4200/smart%20Manager%20%20website"
console.log(url)
console.log(url.replaceAll('%20',"-"))        // replaces char or string 

let testTrim = "    hey   "
console.log(testTrim.trim())            //removes spaces from starting and ending


console.log("---------------------------------")