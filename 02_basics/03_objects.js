//singleton (constructor)
//object.create

// object literals

const mySym = Symbol("key1");


const jsUser = {
    name : "Deepak",
    "full name": "Deepak soni",
    // mySym : "myKey1", //string
    [mySym] : "myKey1", //symbol
    age : 18,
    location : "Hanumangarh",
    email : "deepak@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "tuesday"],

}

// console.log(jsUser.email);//two methods of printing keys in array
// console.log(jsUser["email"]);//two methods of printing keys in array
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);

jsUser.email = "deepaksoni@gmail.com";
// Object.freeze(jsUser); //it freeze the whole object
jsUser.email = "ds@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());