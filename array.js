const arr = [1,2,3,4,5,6,7]
for(let i=0;i<7;i++){
    console.log(arr[i])
}
// javascript array methods
arr.length // returns length
let a = arr.toString() //converts to a string
let b = arr.join("-") // joins all elements using a separator c will be 1-2-3-4-5-6-7
arr.pop() // removes last elements from an array
arr.push(10) //adds the argument in last of an array and returns new array length
arr.shift() //removes the first element and returns it
arr.unshift(10) // adds an elements to starting of an array and returns new array length