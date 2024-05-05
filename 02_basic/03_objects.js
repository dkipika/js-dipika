//singlton object    ------
//Object.create  <---------

//symbles
const mysym = Symbol("key1");

//object litrals

const obj1 = {
    name: "dipika",
    age: 19,
    [mysym]: "mykeyyy",
    email: "dk45@google.com",
    isLoggedIn: false,
}

// console.log(obj1.email);
// console.log(obj1["age"]);


// obj1.email = "payal@google.com"
// Object.freeze(obj1)
// obj1.email = "deepak@google.com"


// console.log(obj1);

obj1.greeting =  function(){
    console.log("Hello User !!!");
}
obj1.greetingTwo =  function(){
    console.log(`Hello User ,${this.name}`);
}
console.log(obj1.greeting());
console.log(obj1.greetingTwo());