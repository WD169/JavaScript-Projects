const newObj = new Object()
newObj.name = "Pratik"
console.log(newObj)

const new1 = {}
new1.id = 232
new1.gmail = "abc@gmail.com"
console.log(new1)
console.log("----------------------------------------")


const obj1 = {
    name: "chinu",
    loc: "Mumbai",
    rollno: 23
}
const obj2 = {
    emp_name: "Employee1",
    emp_loc: "Thane",
    rollno: 45
}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)
console.log("----------------------------------------")


const user = [
    {
        name: "abc",
        roll: 87
    },
    {
        name: "xyz",
        roll: 97
    },
    {
        name: "xyssdz",
        roll: 97565,
        funct: {
            user_name: "User1",
            user_roll: 345
        }
    }
]
console.log(user[2].funct.user_name)
console.log("----------------------------------------")

console.log(user[1].hasOwnProperty("roll"))
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log("----------------------------------------")

