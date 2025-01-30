// OBJECTS 

const obj2 = {
    emp_name: "abc",
    emp_id: 12,
    emp_phone: 898812374
}
const obj = Object.create(obj2)  //For creating object 
console.log(obj2)
console.log(typeof obj2)
console.log("--------------------------")

//New 

let obj1 = {
    name: "Chinu",
    email: "chinu123@gmail.com",
    phone: 932658834
}
console.log(obj1)         //This is new technique for creating objects 
console.log(typeof obj1)
console.log(obj1.name)
console.log(obj1["email"])
console.log("--------------------------------")

obj1.name = "Chinmay"
console.log(obj1)
// Object.freeze(obj1)    //It freezes the object and we cannot change any value
obj1.name = "ABC"
console.log(obj1)
console.log("--------------------------------")

//Symbol
let mysys = Symbol("Key")
const test = {
    [mysys]: "myKey"   //symbol used in object
}
console.log(test.mysys)    //cannot access Symbols like this 
console.log(test[mysys])
console.log(test)
console.log("--------------------------------")

