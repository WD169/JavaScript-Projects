
let a = 45

if(true) {
    let a = 10
    const b = 20
    // var c = 30      //The var is not used 

    console.log("Inner scope value : ", a)
}

console.log("Out of the scope : ",a)

// console.log(b)
// console.log(c)


function one() {
    const wel = "welcome"
    function two() {
        const val2 = "hello world"
        console.log(wel)
    }
    // console.log(val2)
    two()
}
one()

console.log(abc(5))
function abc(value) {
    return value
}

// console.log(xyz(6))
const xyz = function(num) {
    return num + 2
}
console.log(xyz(6))
