let score = "33abc";
// let score = null; // output 0

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);  //to change score in number datatype
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  //NaN => not a number


// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0

let isLoggedIn = 1; //rue
// let isLoggedIn = ""; //false

let booleanIsLoggedIn = Boolean(isLoggedIn); //to change isLoggedIn in Boolean datatype
// console.log(booleanIsLoggedIn); // true

// 1 => true / 0 => false
// " => false"
// "deepak" => true


let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber); // number


// ****************** Operations ******************************

let value = 3 ;
let negValue = -value;
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello";
let str2 = " Deepak";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log((2+4) * 5 % 4);

console.log(+true); //1
console.log(+""); //

let num1 , num2 , num3;

num1 = num2 = num3 = 2+2;

let gameCounter = 100;
++gameCounter; //prefix & postfix / increment & decrement
console.log(gameCounter);