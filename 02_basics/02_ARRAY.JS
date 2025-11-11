const marvel_heroes = ["thor" , "ironman" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

// marvel_heroes.push(dc_heroes); //it add new element at the end of array

// console.log(marvel_heroes); //it adds the dc_heroes as the 3rd element of marvel_heroes
// console.log(marvel_heroes[3][1]);//flash

// const all_heroes = marvel_heroes.concat(dc_heroes); //it merge properly the array
// console.log(all_heroes); 


//SPREAD OPERATOR (WE CAN JOIN 2 ORR MORE THE 2 ARRAYS PROPERLY)
const all_new_heroes = [...marvel_heroes , ...dc_heroes];
// console.log(all_new_heroes);


const another_array = [1 , 2, 3 , [4 , 5 ] , 6 , [7 , 8 , [9 , 10]]];
// console.log(another_array);

const real_another_array = another_array.flat(Infinity); //select the depth in parenthesis
// console.log(real_another_array); //it spread out normally


console.log(Array.isArray("deepak")); //gives the boolean value
console.log(Array.from("Deepak"));
console.log(Array.from({name : "Deepak"})); //it gives empty object


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3)); // converts values into an array