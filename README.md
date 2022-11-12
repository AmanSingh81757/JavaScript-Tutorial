# JavaScript-Tutorial
## This tutorial follows the course from CWH


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