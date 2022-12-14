# JavaScript-Tutorial


## PRINTING TO CONSOLE
- Basic printing the stuff on console:
```js
console.log("apple")
```
>apple

## VARIABLES
- a variable is a storage to contain data such as numbers strings etc
- We can create a variable using 3 types var, let, const
    - var means variable means we can change the value assigned and redeclare the variable any time
    - const means constant means we cannot redeclare and cannot change the value
    - let allows us to change the value of the variable but cannot redeclare the variable at ant time
- there are some reserved keywords which cannot be used to name a variable jsut like any other language
```js
var a = "apple" // value can be changes as well as redeclared
let b = "mango" // value can be changes further ahead
const c = "banana" // value doesnt change
var a = "kiwi"
b = "watermelon"
```

## PRIMITIVE DATA TYPES
- JS hav 7 different primitive data types : null, number, boolean, bigint, symbol, undefined, string
```js
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "apple"
let f = Symbol("I am a nice symbol")
let g = undefined
```
- the typeof method gives us the data type of our variable
```js
console.log(typeof(a))
conosle.log(typeof(d))
```
>null
>bigint

## NON PRIMITIVE DATA TYPES / OBJECTS
- objects are non primitive data types it doesn't have a specific data type
- objects are key value pair
```js
const obj = {
    "name" : "Aman",
    "roll" : 69,
    "adult" : true
}
// to access elements
console,log(obj["name"])
```
> Aman

## OPERATORS & EXPRESSION
- any code written in js is called an expression
- operators are used to perform a specific operation
- operations are of following types:
    - arithmetic operators : + , - , * , / , ** , % , ++ , --
    - logical operators : && , || , !
    - comparison operators : == , != , === !== , > , >= , < , <=
    - assignment operatos : = , += , -= , *= , /=
```js
let a = 5
let b = 7
console.log(a+b) // this gives 12
```
> 12
```js
let c = "5"
console.log( a === c )
console.log( a == c )
```
> false

> true

## CONDITIONAL STATEMENTS
- this expression executes only if the given condition is satisfied
- 4 types of conditionals :  if , if else , else , switch
```js
let a = 5
if( a < 10>){
    console.log("a is less than 10")
}
else if ( a > 10) {
    console.log("a is greater than 10")
}
else{
    console.log("a is 10")
}
```
> a is less than 10


```js
let a = 19
switch (a) {
    case 5:
        console.log("a is 5")
        break
    case 10:
        conosle.log("a is 10")
        break
    default:
        conosle.log("a is not 5 or 10")
}
```
> a is 10
### TERNARY OPERATOR
- single lines conditional statement
- syntax -> (condition)?(statement if condition true):(statement if condition flase)
```js
let marks = 10
(marks>5)?console.log("more than 5"):console.log("less than 5")
```
> more than 5

## FOR LOOPS
- for loop is the simplest type of loop to start a loop in js
```js
for(let i = 0; i < 5 ; i++){
    console.log(i)
}
```
> 0 1 2 3 4

- for in and for each loops are similar to for loops but we can use it to iterate in a data type like array or object
```javascript
const a = [1,2,3,4]
for(let item in a){
    console.log(a[item])
}
for(let i of a){
    console.log(i)
}
```
- they both have same output below
> 1 2 3 4

## WHILE LOOPS
- while loop only takes 1 condition and if it is true the statement under the loop gets executed
```js
let a = 5
while(a > 0){
    console.log(a)
    a--
}
```
> 5 4 3 2 1

- A do while loop executes the statement at least 1 time without checking the condition
```js
let a = 5
do{
    console.log(a)
}
while(a > 6){
    console.log(a)
    a--
}
```
> 5

## FUNCTIONS
- a function is a block of code executing a specific commands which can be called multiple times withour rewriting the whole code again.
```js
function add(a,b){
    return a+b
}
```
- a function can also be written in the following way. this is called an arrow function
```js
const sum = (a,b) =>{
    return a+b
}
```

## STRINGS
- a string is a collection of characters which include letters symbols as well as numbers
- a "" or '' can be used to write a string
```js
let name = 'apple'
console.log(name)
console.log(name.length)
```
>apple

>5
- we can also access the characters of a string like arrays using indices
- using template literal to write a variable in between a string
```js
let name = 'apple'
console.log('my favourite fruit is ${name}')
```
> my favourite fruit is apple
- some escape sequence characters are: '\n' , '\t' , '\r' etc.

## STRING MANIPULATION METHODS
- we can use some methods to get some information about the string or change comethign about the string\
- strings are immutable
- some examples are:
    - string.length - __returns length__
    - string.toUpperCase() - __changes all characters to upper case__
    - string.toLowerCase() - __changes all characters to lower case__
    - string.slice(x,y) - __slices the string from x to y excluding y__
    - string.replace(a,b) - __replaces a with b__
    - string.trim() - __removes white space from start and end__
    - string.concat(a,b) - __adds b to last of a__

[more string methods here](https://www.w3schools.com/js/js_string_methods.asp)

## ARRAYS
- array is a data structure which holds multiple value even of different data types
- arrays are essentially objects in javascript
```js
const arr = [1,2,3,4,5,6]
console.log(typeof arr)
console.log(arr[3]) //how to access elements
console.log(arr.length) // size of array
arr[3] = 10 // changing value
```
> object

> 4

> 6

## ARRAY METHODS
- we can perform many operation on an array some of them are listed below
    - to string method converts array to string
    ```js
    let arr=['a','b']
    let b=arr.toString(arr) // b == "ab"
    ```
    - join method joins the ekements of the array with the character given as argument and returns the joined array as string
    ```js
    let arr[1,2,3,4]
    let c = arr.join("-") // c == 1-2-3-4 type of c is string
    ```
    - pop method removes last element of an array and returns the popped element if assigned to a variable.
    - push method adds a new element to the array and returns the new array length if assigned to a variable.
    - shift method removes the first element of the array and returns the popped element if assigned to a variable.
    - unshift adds an elments in front of the array and returns the new array length if assigned to a variable.
    - delete operator deletes the element of an array at the given index however the length of array doesn not change
    ```js
    arr = [1,2,3,4,5,6]
    delete arr[0] // arr = [ <1 empty item>,2,3,4,5,6]
    ```
    - concat method joins two or more arrays together and returns a new array
    - sort method sorts the array alphabetically or lexicographically.
    ```js
    const arr = [12,43,23,33333,2]
    arr.sort()
    console.log(arr)
    ```
    > 12 2 23 33333 43
    ```js
    let comparator_fucntion = (a,b) =>{
        a>b ? return true:return false;
    }
    arr.sort(comparator_function)
    console.log(arr)
    ```
    > 2 12 23 43 33333
    - reverse method reverses the given array
    - splice 