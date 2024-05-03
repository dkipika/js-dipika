const score = 500

const balance = new Number(200)
console.log(balance);

console.log(balance.toFixed(2));
console.log(balance.toString());

const num = 123.443534

console.log(num.toPrecision(4));

const hundreds =10000000
console.log(hundreds.toLocaleString('en-In'));


//********************math ****************


console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(5.6));
console.log(Math.sqrt(3434));
console.log(Math.min(3,4,6,2));
console.log(Math.max(3,53,2,3));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.round(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min));

