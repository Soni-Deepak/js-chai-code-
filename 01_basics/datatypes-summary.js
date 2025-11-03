// THERE ARE TWO TYPES OF DATATYPES

// 1). PRIMITIVE

//7 TYPES : STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

// const id = symbol('123');
// const anotherId = symbol('123');

// console.log(id === anotherId);

// const bigNumber = 34562662345526n;



// 2). REFRENCE (NON-PRIMITIVE)

//ARRAY , OBJECT , FUNCTIONS

const heroes = ["shaktiman , mightyRaju , Bheem"];//datatype value = object

let myObj = {          //datatype value = object
    name : "deepak", 
    age : 18,
}

const myFunc = function(){
    console.log("Hello world");
}

console.log(typeof myFunc); ////datatype value = function




// **************stack & Heap Memory********************

// Stack (primitive) , Heap (Non-Primitive)

let myYoutubename = "deepaksoni00";

let anothername = myYoutubename;    //primitive datatype give copy of another
anothername = "indianGamer";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "IndianGamer59@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);