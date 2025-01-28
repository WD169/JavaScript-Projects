//Primitive datatype
// Number , String , Boolean , Undefined, Null, Symbol, bigint

const BigNumber = 12341234234
console.log(BigNumber)
console.log("------------------------------------")

//Symbol used to create unique value
let num = Symbol(123)
let otherNum = Symbol(123)
console.log(num == otherNum)
console.log("------------------------------------")


//Non Primitive datatype
// Arrays, function, objects
const array = ["ABC","xyz","ASDFGFD"]           //Array
console.log(array)

// const first_function = function() {
//     return "This is function..."
// }
// console.log(typeof first_function)

function fun1() {
    console.log("This is function...");
}
fun1();
console.log("------------------------------------")