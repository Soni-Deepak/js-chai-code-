//IF 
const isUserLoggedIn = true;

// if(3 != 2){
//     console.log("true");
// }

// if(2 == "2"){ //it make the string datatype into number 
//     console.log("executed");
// }

// if(2 === "2"){// it doesn't change the datatype
//     console.log("executed");
// }

let temp = 45;

// if(temp <=50){
//     console.log("less than 50");
// }
// else {
//     console.log("Temperature is greater than 50");
// }

// console.log(`Executed`);


// > , < , <= , >= , == , != , ===

const score = 200;

// if(score > 100){
//     const power = "Fly";
//     console.log(`user power is : ${power}`); //block scope
// }

// console.log(`user power is : ${power}`); //global scope  power is not accessed in global scope


const balance = 1000;

// if(balance > 500) console.log("test") , console.log("test2"); //implicit scope

if(balance < 500){
    console.log("Less than 500");
}
else if (balance < 750) {
    console.log("Less than 750");
}
else if (balance < 90) {
    console.log("Less than 900");
}
else {
    console.log("Less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false; 
const loggedInFromGmail = true;

if (userLoggedIn && debitCard && 2==3) { //third statement if false so no code executed
    console.log("Allow you to buy courses");
}

if (loggedInFromGoogle || loggedInFromGmail) {
    console.log("User logged In ");
}