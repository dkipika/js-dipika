let a =409595

if(true){
    let a = 30
    const b = 60
    // var c = 400  DO NOT USE VAR IT WILL BE ACCEBLE OUTSIDE THE LOOP ALSO
    // console.log("Inside:",a)
}

//console.log(a)

function one() {
    let username = "Dipika"
    
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website); Raha take ice-cream from Alia but Alia can't take ice-creame from Raha 
    two()
}
one()

if (true) {
    let username = "Dipika"
    if(username == "Dipika"){
        const website = " youtube"
        console.log(username + website);
    }
}
// console.log(username);



//++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++


console.log(addOne(5))
function addOne(num){
    return num + 1
}


addTwo()

const addTwo = function(num){
    return num + 2
}
