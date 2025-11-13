// global scope value is available in block scope but block scope value is not available for global scope

var c = 300; //global scope
let a = 400;
if(true){ //block scope
let a = 10 ;
const b = 20;
var c = 30;
console.log("Inner :" , a);
}

console.log("Outside :" ,a);
// console.log(b);
// console.log(c);


//nestedscope

function one(){
const username = "deepak";

function two(){
const website = "Youtube";
console.log(username);
}
// console.log(website); //cannot access outside the block scope 

two();
}

one();


if(true){
    const username = "Deepak"
    if(username === "Deepak"){
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website); //cannot excess outside the block scope
}

// console.log(username); //cannot excess outside the block scope


// ++++++++++++++++++++++ Interesting concept +++++++++++++++++++++++++++++++

console.log(addOne(6));
function addOne(num){
return num + 1;
}



// addTwo();// cannot access before initialization because it is stored in a variable
const addTwo = function(num){
    return num + 2;
}
