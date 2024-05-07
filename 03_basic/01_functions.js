function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("I");
    console.log("K");
    console.log("A");
}

sayMyName()

function addTwoNum(num1,num2){  //parameter num1 and num2
    return num1+num2
}
console.log(addTwoNum(2,5));   // argument are 2 and 5


function loginMessage(username){

    if(username==undefined){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in `
}
console.log(loginMessage("Dipika"));