let array = [1,2,3,4,[3,4,5],56,78,45,[56,67,87,[56,32,12,24]]]
let arr1 = ["Thor", "Hulk", "IronMan"]
let arr2 = ["DoctorStrange","Spiderman", "Superman"]
let arr4 = ["abc","xyz", "thi", "ure"]

let arr3 = arr1.concat(arr2)    // adds both string and returns third string
console.log(arr3)

let multi_concat = [...arr1,...arr2,...arr4]  //It concats two or more arrays together
console.log(multi_concat)

console.log("----------------------------------")

console.log(Array.isArray(["Chinu","Jadhav"]))    // Checks if it is an array
console.log(Array.from("Chinuhjgvcgjhvhjjhv1213223233141241"))  //converts string into array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

console.log("----------------------------------")