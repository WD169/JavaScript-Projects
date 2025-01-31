
function cart(...val) {    //"..." it is rest operater, can take infinite number of arguments 
return val
}
console.log(cart(400,500,600))
console.log("----------------------------------")

function user(value1,value2,...value3) {
    return value3
}
console.log(user(400,500,600,789645))
console.log("----------------------------------")


//Passing object in function
function handlingObject(getObject) {
    return `The id of ${getObject.username} is ${getObject.userid}`
}

const userObject = {
    userid: 56,
    username:"Chinu"
}
// console.log(handlingObject(userObject))
console.log(handlingObject({                  //Directly passing the object
    userid: 45,
    username: "abc",
    roll: 667
}))                             

