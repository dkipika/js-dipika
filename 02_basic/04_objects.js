// const tinderUser = new Object() // singleton object 

//non singlton object

const tinderUser = {
    name: "Payal",
    age: 19,
    isLoggedIn: false
}     

const regularUser = {
    emailId: "dk45@gmail.com",
    fullName:{
        usarName: {
            firstName: "Dipika",
            lastName: "kori"
        }
    }
}

//console.log(regularUser.fullName.usarName.firstName);

const obj1 = { 1:"a" , 2:"b"}
const obj2 = { 3:"a" , 4:"b"}
const obj3 = { 6:"a" , 5:"b"}

//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}
//console.log(obj4);

const arr = [
    {
        id:1,
        name:"DK"
    },
    {
        id:2,
        name:"Ak"
    },
    {
        id:3,
        name:"PK"
    }
]

// //console.log(arr[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    name:"dk",
    price:"2356"
}

///course.name
//bar bar course.name aesa use na karna pade is lia deconstructor ka use karte hai

 const {name} = course;
 console.log(name);

 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]