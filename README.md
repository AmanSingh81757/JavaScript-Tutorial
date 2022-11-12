# JavaScript-Tutorial
## This tutorial follows the course from CWH


## PRINTING TO CONSOLE
- Basic printing the stuff on console:
```js
console.log("apple")
```

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
console.log(typeof(a)) // this will give null
conosle.log(typeof(d)) // this will give bigint
```

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

let c = "5"
console.log( a === c ) // this give false as data type are not same
console.log( a == c ) // this gives true as both are 5
```
