function sayMyName (){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName();

// function addTwoNum(num1 , num2){ //parameters
//     console.log(num1 + num2);
// }


function addTwoNum(num1 , num2){ //parameters
//    let result = num1 + num2;
//    return result;
return num1 + num2;
//    console.log("deepak"); //after result nothing is executed

}


// addTwoNum(3 , 4); //Function call   arguments


const result = addTwoNum(3 , 4); 
// console.log("Result : " , result);


function loginUserMsg(username = "sam"){ //we can give a default value which is never undefined
    if(!username){ //is same as username === undefined
console.log("Please enter a username");
return; //after return nothing is execute
    }
    return `${username} just logged in`;

}

// console.log(loginUserMsg("DEEPAK SONI"));
// console.log(loginUserMsg());//undefined
// console.log(loginUserMsg("Deepak"));


function calculateCartPrice(val1 , val2 , ...num){ //... are rest operator
    return num;
}

// console.log(calculateCartPrice(200 , 300 , 500 , 2000)); //200 goes to val1 and 300 goes to val2 and rest all goes to ...num array


const user = {
    username : "deepak",
    price : 199,
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price} `);
}

// handleObj(user); //object passes through function

handleObj({  //another way of passing object
    username : "sam",
    price : 455,
})

const myNewArray = [200 , 400 , 100 , 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 500 , 400 , 1000]));//another way of passing array