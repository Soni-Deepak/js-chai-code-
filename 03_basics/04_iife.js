//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
}) (); //with use of paranthesis it immediately execute
//semicolon ; is used to separate two iife

// () () first para is for definition and second para is for execution

( (name) => {
console.log(`DB connected two ${name}`);
} ) ("Deepak")