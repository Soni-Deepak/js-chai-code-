const user = {
    username : "Deepak",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`); //this is used for current context
        console.log(this);//print all the current values
    }
}

// user.welcomeMsg();
// user.username = "sam"; //it change the current context
// user.welcomeMsg();

// console.log(this); //print empty object in node   In browser it run the global object

// function chai(){
//     let username = "deepak";
//     // console.log(this);// it print the global value
//     console.log(this.username); //undefined because this is not used in functions it only used in objects
// }


// const chai = function(){ //it also cannot work
//     let username = "deepak";
//     console.log(this.username);
// }


const chai = () => { //arrow function   it also cannot work
    let username = "deepak";
    console.log(this.username);
}

// chai();


// () => {} //syntax of arrow function

// const addTwo = (num1 , num2)=> {
// return num1 + num2; //explicit return means uses of return keyword
// }


// const addTwo = (num1 , num2)=>  num1 + num2; //implisit return in one line

//Both does not need to write return keyword

// const addTwo = (num1 , num2)=>  (num1 + num2); //implicit return in one line

const addTwo = (num1 , num2)=>  ({username : "deepak"}); //implicit return in one line


console.log(addTwo(3 , 4));