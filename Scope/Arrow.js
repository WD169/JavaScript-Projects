const user = {
    username: "Chinu",
    id: 12,
    welcome: function() {
        console.log(`${this.username}, welcome to javascript`)
    }
}
user.welcome()
user.username = "Pratik"
user.welcome()
console.log("--------------------------")

function abc() {
    let name = "abc"
    console.log(this.name)
}
abc()
console.log("--------------------------")


const user1 = function() {
    let name = "xyz"
    console.log(this.name)
}
user1()
console.log("--------------------------")

//Arrow function

const superArrow = () => {
    let name = "xyz"
    console.log(this.name)
    console.log(name)
}
superArrow()
console.log("----------------------")

const addTwo = (num1, num2) => (num1+num2)  //Arrow function in one row
console.log(addTwo(5,8))
console.log("----------------------")
