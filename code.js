// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
 // Pre- refactor:
//
// function sayHello(input) {
//     if (input === "Pat") {
//         return ("Hello, Pat!")
//     } else if (input === "Alex") {
//         return ("Hello, Alex!");
//     } else {
//         return ("Hello, Jane!");
//     }
// }


function sayHello(input) {
    if(input === true){
        return "Hello, World!";
    }
    if(input === false){
        return "Hello, World!";
    }
    if(typeof input === 'undefined') {
        return "Hello, World!";
    }
    else {
        return "Hello, " + input + "!";
    }
}


