// const tinderUser = new Object(); // but it is constructor
const tinderUser = {}; //both are objects

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Deepak",
            lastName : "Soni",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};
const obj3 = {5: "a" , 6: "b"};

// const obj4 = {obj1 , obj2};//same as in arrays 
// const obj4 = Object.assign({} , obj1 , obj2 , obj3) ; //the {empty object} is target (it is optional)

const obj4 = {...obj1 , ...obj2} ;// SPREAD OPERATOR
// console.log(obj4);


const user = [  //array object
    {
        id : 1 ,
        email : "Ds@gmail.com",
    },
    {
        id : 1 ,
        email : "Ds@gmail.com",
    },
    {
        id : 1 ,
        email : "Ds@gmail.com",
    },
]

// console.log(user[1].email);



// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //gives boolean value





const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Deepak",
}


// course.courseInstructor

// both are same only syntax is different

// const {courseInstructor } = course
const {courseInstructor : Instructor} = course; //courseInstructor name change to Instructor          object destructure

// console.log(courseInstructor);
console.log(Instructor);




/*
At old time api value is in xml structure which is difficult 
in today's time api is in Json Format
*/

// JSON FORMAT                                      JSON FORMATTER

// (
//     "name" : "deepak",
//     "courseName" : "js",
//     "price" : "free"
// )

// both are json format

// [
//     {},
//     {},
//     {},
// ]
