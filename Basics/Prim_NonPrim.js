//Primitive datatype Stored in ----> stack (Copies)
// Number , String , Boolean , Undefined, Null, Symbol, bigint

const BigNumber = 12341234234
console.log(BigNumber)
console.log("------------------------------------")

//Symbol used to create unique value
let num = Symbol(123)
let otherNum = Symbol(123)
console.log(num == otherNum)
console.log("------------------------------------")


//Non Primitive datatype Stored in ----> heap (Reference)
// Arrays, function, objects
const array = ["ABC","xyz","ASDFGFD"]           //Array
console.log(array)

function fun1() {
    console.log("This is function...");
}
fun1();
console.log("------------------------------------")

//Example for heap memory 
let user = {
    id: 1,
    name: "Chinu",
    email: "chinu@gmail.com"
}
let otherUser = user;
otherUser.name = "Chinmay"

console.log(user)
console.log(otherUser)
console.log("------------------------------------")