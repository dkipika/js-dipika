//array

const arr1 = [1,3,5,7,8]

const arr2 = new Array(3,5,7)
console.log(arr1);

//array methods

// arr2.push(4)
// arr2.push(6)
// arr2.pop()
// console.log(arr2);


// arr1.unshift(3)
// arr1.shift()
// console.log(arr1);

// console.log(arr1.includes(3));
// console.log(arr1.indexOf(8))


// console.log(typeof arr1);

// const newArr = arr1.join()
// console.log(arr1);
// console.log(newArr);

// console.log(typeof newArr);


console.log(arr1.slice(1,3));  
// slice extract the elements from the array without modifying the original. 
console.log(arr1);

console.log(arr1.splice(1,3));  
// splice extract the elements and changes the content of the original array.
console.log(arr1);
