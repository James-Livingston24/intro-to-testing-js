// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
 // Pre- refactor:

// function sayHello(input) {
//     if (input === "Pat") {
//         return ("Hello, Pat!")
//     } else if (input === "Alex") {
//          return ("Hello, Alex!");
//     } else {
//         return ("Hello, Jane!");
//     }
// }


function sayHello(input) {
    return "Hello, " + input + "!";
}
