const socre = 400;
// console.log(socre);

const balance = new Number(100);  //it has prototypes
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  //After decimal value

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//precise value up to 4 number

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //us standard
// console.log(hundreds.toLocaleString('en-IN'));  //indian standard


//+++++++++++++++++++ Maths +++++++++++++++++++++++++


 console.log(Math);
//  console.log(Math.abs(-4)); //change the negative value into positive
//  console.log(Math.round(4.6)); //change into roundof value
//  console.log(Math.ceil(4.2)); //roundof into highest standard value
//  console.log(Math.floor(4.2)); //roundof into lowest standard value
//  console.log(Math.min(4 , 3 , 6 , 8)); //give the minimum value
//  console.log(Math.max(4 , 3 , 6 , 8)); //give the maximum value

 console.log(Math.random()); // give random value between 0 to 1
 console.log(Math.random()*10) // random number between 0 to 10
 console.log(Math.floor(Math.random()*10) + 1) //random number between 1 to 10 

 const min = 10;
 const max = 20;

 console.log(Math.floor(Math.random() * (max - min + 1)) + min);