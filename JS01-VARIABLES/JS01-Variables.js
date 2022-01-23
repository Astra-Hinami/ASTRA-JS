//variables are the memory contaienrs to store the data, and variable's data can be varied.

/*
    A variable is a label that referenes a value like a number or string. Before using the variable, you need to declare it. 
*/

/* 
To declare a variable in JS we use 'var' keyword followed by the variable name as follows.
 Syntax : var variableName;
 Example: var myAge;
*/

/** 
 * * By default the variable 'myAge' has a special value 'undefined' if you have not assigned any value to it.
**/


/** 
 * * Starting in ES6 you can use 'let' keyword to define a varibale. (It's good practice to use let)
 * * let myName;
 * * variable initilization by assigning it a string value : let myName = "Astra";
**/

var myFirstName = "Astra";
let myLastName = "Yumi";
console.log("Hello,\nmy name is "+myFirstName+" "+myLastName);

// * JS allows you to declare two or more values using a single statement
// ! To separate two variable declaration, you use a comma (,) like this.

let myGirlfriendFirstName = "Hinata", myGirlfriendLastName = "Hyuga";
console.log(`Ohhh really, ${myFirstName} and ${myGirlfriendFirstName} ${myGirlfriendLastName} you guys are girlfriend-boifriend ????`)

// * You can change type of variable (not recommended.)

let myVar = "It's a string";
console.log(myVar);
myVar = 11234;
console.log(myVar);