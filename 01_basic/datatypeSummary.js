//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Dipika",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//*****************stack and heap********************

/*datatypes are based on memory allocation

Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

stack me jab value change hoti hai ak primitive datatype ki to copied vlaue me change hoti hai

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

heap me original value me hi change hoti hai value 

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.
*/