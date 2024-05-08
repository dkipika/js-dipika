// Immediately Invoke Function Expressions(IIFE)

// NOTE => globle score ke pollution se problem hoti hai
// islia IIFE ka use karte hai 
// IIFE also mean jo function immediately execute ho jae

(function chai(){
    console.log("DB CONNECTED");
})();

(()=>{
    console.log("DB CONNECTED without funtion name");
})();

((name)=>{
    console.log(`DB CONNECTED ,${name} !!!`);
})("Dipika");
