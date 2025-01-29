//Arrays ....

let arr = [1,2,33,345,78,99]
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr[4])
console.log(arr.indexOf(2))
console.log(arr.includes(59))    // Checks value present or not
console.log(arr.includes(345))


console.log("--------------------------------")

arr.push(45)                // insert or add into array
console.log(arr)
console.log(arr.pop())    //Removes last entered element from array
console.log("After pop :", arr)

arr.unshift(67)
arr.unshift(9000)       //Add element at start of array
console.log(arr)
arr.shift()             //Remove element from start of Array
console.log(arr)

let newArray = arr.join()    //Converts the array into string 
console.log(newArray)
console.log(typeof newArray)

console.log("--------------------------------")
arr.shift()
console.log("Before slice: ", arr)    
console.log(arr.slice(1,5))    //it is like a substring         
console.log("Before splice: ", arr)
console.log(arr.splice(1,5))    //it cuts the array 
console.log("After splice: ", arr)