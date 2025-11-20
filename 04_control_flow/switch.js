// basic syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         // break; //break is used to break the control flow
//     case 4:
//         console.log("Apr");
//         break;

//     default:
//         console.log("Default Case Match");
//         break;
// }

const month = "apr"; //for string match

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("Default Case Match");
        break;
}