// function sayMyName(){
//     console.log("D");
//     console.log("I");
//     console.log("P");
//     console.log("I");
//     console.log("K");
//     console.log("A");
// }

// sayMyName()

function addTwoNum(num1,num2){  //parameter num1 and num2
    return num1+num2
}
//console.log(addTwoNum(2,5));   // argument are 2 and 5


function loginMessage(username){

    if(username==undefined){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in `
}
//console.log(loginMessage("Dipika"));


function calculateCartPrice(...num1){  //use this when you don't know how many parameter will come
    return num1
}

//console.log(calculateCartPrice(200,300,400));

const user={
    username: "Dipika",
    price: 5006
}

function handleObject(anyUser){
    return `Username is ${user.username} and price is ${user.price}`
}

//console.log(handleObject(user))

const arr = [304,4533,23342,453]

function handleArr(getArr){
    return getArr[1]
}

console.log(handleArr(arr));
console.log(handleArr([200, 400, 500, 1000]));