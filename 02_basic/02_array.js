const capi = [1,2,3]
const smal = ["a","b","c"]

// capi.push(smal)
// console.log(capi);
// console.log(capi[3][1])


// const all_letters = capi.concat(smal)
// console.log(all_letters);

const another_arr = [...capi,...smal]
console.log(another_arr);
const all_last = capi.flat(4)
console.log(all_last);


console.log(Array.isArray("Dipika"));
console.log(Array.from("Dipika"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

