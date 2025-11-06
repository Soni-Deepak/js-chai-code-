const name = "Deepak"
const repoCount = 50;

// console.log(name + repoCount + "value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`) //String Interpolation

const gameName = new String("Deepak-s-ds")

// console.log(gameName[0]);  //OBJECT => key-value Pairs
// console.log(gameName.__proto__);

//string methods :

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


const newString = gameName.substring(0 , 4);
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const newStringOne = "  deepak   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the extra spaces

const url = "https://deepak.com%20soni"

console.log(url.replace("%20" , "-")); //replace %20 into -

console.log(url.includes('deepak')); //deepak is include or not in url - true or false

console.log(gameName.split('-')); //it split the spaces , dashes , commas etc