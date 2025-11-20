// const userEmail = "Ds@gmail.com";
// const userEmail = "";
const userEmail = [];

if (userEmail) { 
    console.log("Got User Email"); //if string has value it is executed
} else {
    console.log("Don't Have User Email"); //if string has no value it is executed
}

// falsy values

//  False , 0 , -0 , BigInt 0n , "" , null , undefined , NaN (not a number)

// truthy values

//"0" , 'false' , " " , [] , {} , function(){} 

// if (userEmail.length === 0) { //to check empty array
//     console.log(`Array is Empty`);
// }

const emtyObj = {};

if (Object.keys(emtyObj).length === 0) {  //to Check empty Object
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??):  null undefined

let val1 ;
// val1 = 5 ?? 10; //take the first value
// val1 = null ?? 10; //take the without null value
// val1 = undefined ?? 15; //take the without undefined value
val1 = null ?? 15 ?? 20; //take the first without null or undefined value



console.log(val1);


//Terniar Operator

//syntax
// condition ? true : false ;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80") ; 