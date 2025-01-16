//Asssignment 10


/*   
1.1.What is JavaScript?

JavaScript is a programming language that is primarily used in the development of websites.
*/

//2. Variable and types

let usearAge = 19;
let userName = 'Paul Atreides';
 console.log(`Name: ${userName}, Age:u ${usearAge}`)

 // 3. Mulitline comment

 /*
 This is a multiline comment
 Function sum(); -> Adds two numbers and returns the value
  */

 function sum(){
    a=5;
    b=6;
    c=a+b;
    return c;   
 }

console.log("a + b =",sum())

// 4.Operations

let num1 = 10;
let num2 = 2;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

//5.Data Types:

let a1 = "This is a string";
let b1 = 15;
let c1 = a === b; 
const arr = ["this is an array","with different data types",4554,'5655',a===b];

console.log(a1,b1,c1,arr);

// 6.Funnctions

function greetUser(name){
    console.log(name);
    return "Thank You";
}

console.log(greetUser("Paul Atreides"))

// 7. if-else

const temp = 29;

if (temp>30){
    console.log("Too hot")
}
else{
    console.log("Too cold");
}

//8.For loop

for (i=1;i<6;i++){
    console.log(i);
}

//9.Loose vs Strict Equality:
/* 
Loose Equality: Compare two values on both sides and then return true or false. This operator checks equality only after converting both the values to a common type.

Strict Equality: Compare two values on both sides and then return true or false. It compares both the value and the type. 
*/
 
let q = 15;
let w = '15';

console.log("Strict Equality",q===w);
console.log("Loose Equality",q==w);