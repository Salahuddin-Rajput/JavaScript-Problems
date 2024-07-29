var myVar; // Declaration is hoisted called variable Hoisting
console.log(myVar); // Output: undefined
myVar = 5; // Initialization remains in place
console.log(myVar); // Output: 5

/*In JavaScript, hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use functions and variables before they are declared in your code, leading to some potentially unexpected behaviors.

How Hoisting Works
Variable Declarations:

Only the declarations are hoisted, not the initializations. This means that if a variable is declared and initialized later in the code, only the declaration is moved to the top, and the initialization remains in its original place.
Function Declarations:

Both the function name and its body are hoisted to the top of the scope, meaning you can call the function before it appears in the code.
Function Expressions:

Unlike function declarations, function expressions are not hoisted in the same way. If a function is assigned to a variable, only the variable declaration is hoisted, not the function expression itself.*/

/*Function Declaration Hoisting
Here's how function declaration hoisting works:*/
console.log(myFunction()); // Output: "Hello, world!"

function myFunction() {
  return "Hello, world!";
}


function myFunction() {
    return "Hello, world!";
  }
  
  console.log(myFunction()); // Output: "Hello, world!"

  /*Function Expression Hoisting
Function expressions behave differently:*/
  console.log(myFunction()); // TypeError: myFunction is not a function

  var myFunction = function() {
    return "Hello, world!";
  };
  /*Hoisting and let/const
Variables declared with let and const are also hoisted, but they are not initialized until the code execution reaches the declaration. This leads to a Temporal Dead Zone (TDZ), where the variables are in a hoisted state but cannot be accessed before their declaration in the code.

Example with let and const*/
  
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;
