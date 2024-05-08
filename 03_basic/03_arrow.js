const user = {
    username: "Dipika",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}
//user.welcomeMessage()

user.username = "Radha"
//user.welcomeMessage()
//console.log(this);     in this it will give empty paremtheses

//  IN BROWSER , GLOBLE OBJECT IS WINDOW OBJECT 
//  IN THIS NODE , GLOBLE OBJECT IS EMPTY

function chai(){
    let username= "Dipika"
    console.log(this.username);
}

const chai = function(){
    let username = "Dipika"                
    console.log(this.username);
}
//chai()

const chai = ()=>{
    let username = "Dipika"
    console.log(this.username);
}
//chai()


// const AddTwoNum = (num1,num2)=>{             // Explicit WAY
//     return num1+num2
// }

//const AddTwoNum = (num1,num2)=> num1+num2     
// const AddTwoNum = (num1,num2)=>(num1+num2)   // Implicit WAY
//console.log(AddTwoNum(2,4));

//***************************************
//*     CURLY BRACESES => RETURN        *
//*     ROUND BRACESES => NO RETURN     *
//***************************************


const nameIs = ()=>({username:"Dipika"})

console.log(nameIs());