const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple',
}

for (const key in myObj) {
//  console.log(`${key} shortcut is for ${myObj[key]}`)   ;
}

const programming = ["js" , "cpp" , "rb" , "swift"];

for (const key in programming) {
//  console.log(key)   
 console.log(programming[key])   
    
}


// const map = new Map();
// map.set('IN' , 'India');
// map.set('USA' , 'United States Of America');
// map.set('FR' , 'France');
// map.set('IN' , 'India');



// maps is non iteratable

// for (const key in map) {
//     console.log(key)
// }