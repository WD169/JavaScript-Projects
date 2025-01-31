

function abc() {
    let a = 3, b = 4
    console.log(a+b)
}
abc();     //It provides the o/p
console.log("------------------------------------")


function mul(num1,num2) {
    return num1 * num2;
}
mul(4,5);              // It will not provide o/p because func is returning
console.log(mul(4,5))    //We have to print the return value
console.log("------------------------------------")

function loginUser(username) {
    if(username === undefined) {
        return "Please enter the valid username.."
    }
    return `${username} is logged in successfully !!`
}
console.log(loginUser("Chinu"))
console.log("------------------------------------")
