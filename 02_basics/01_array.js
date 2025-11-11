//ARRAYS   shalow copy(change refrential(original)) / deep copy(change only copy) 

const myArr = [0 , 1 , 2 , 3 , 4];
const myHeroes = ["shaktiman" , "nagraj"];
  
// array starting from the 0th index

const myArr2 = new Array(2 , 3 , 4 , 5)
// console.log(myArr[1]); // 2nd element


//ARRAY METHODS

// myArr.push(6);//add element at the last of an array
// myArr.push(7);
// myArr.pop();// remove element at the last of an array

// myArr.unshift(9);// add element at the first of an array
// myArr.shift();// remove element at the first of an array

// console.log(myArr.includes(9));  // give the boolean value 
// console.log(myArr.indexOf(9)) // -1 doesn't exists

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);  //converted array into string
// // console.log(typeof newArr);  //string



//slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1 , 3) //ts range is 1 to 2 (3 is not included)
console.log(myn1);

console.log("B" , myArr);
const myn2 = myArr.splice(1,3);//its range is 1 to 3 (3 is included)

console.log("C" , myArr);
console.log(myn2)  

//SLICE DOESN'T CHANGE THE ORIGINAL ARRAY BUT SPLICE CHANGE THE ORIGINAL ARRAY