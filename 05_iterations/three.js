//FOR OF

// [" " ,  " " , " "];
// [{} , {} , {}]


const arr = [1 ,2 ,3 ,4 ,5];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World";
for (const greet of greeting) {
    // console.log(`each character is ${greet}`);
}


// MAP
// map are similar to object it is a key-value pair but it only store unique values

const map = new Map();
map.set('IN' , 'India');
map.set('USA' , 'United States Of America');
map.set('FR' , 'France');
map.set('IN' , 'India');


// console.log(map);


for (const [key , value] of map) {
    console.log(key , ":-" , value);
    
}

const myObj = {
    game1 : 'NFS',
    game2 : 'spiderman',
}

// for (const [key , value] of myObj) {
//     console.log(key , ":-" , value);
    
// }  //it doesn't work because maps are iterable but objects are not