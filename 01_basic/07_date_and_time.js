let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(date.toJSON());

let createNewDate = new Date(23,0,23,4,6)
console.log(createNewDate.toLocaleString());
let anotherNewDate = new Date("01/12/23")
console.log(anotherNewDate.toLocaleString());



let timeStamp = Date.now()
console.log(timeStamp);

console.log(anotherNewDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// // `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
})
