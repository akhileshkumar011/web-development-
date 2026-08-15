// Global scope
const age = 15;

console.log(age);

{
    console.log(age);
}

if (true) {
    console.log(age);
}

for (let i = 0; i < 2; i++) {
    console.log(age);
}

function sayHello() {
    console.log("hi", age);
}

sayHello();



//function scope

// console.log(fullName);

function sayHello() {
    const fullName = "Earth";

    console.log("Hello Dunia.", fullName);
}

// console.log(fullName);

sayHello();


//block scope

{
    let age = 20;
    console.log(age);  // 20
}

// console.log(age);  // Error


if (true) {
    const name = "Akhilesh";
    console.log(name);  // Akhilesh
}

// console.log(name);  // Error

{
    let a = 10;
    var b = 20;
}

console.log(b);  // 20
// console.log(a);  // Error



// Temporal Dead Zone (TDZ)

console.log(marks);

console.log("babbar");
console.log("Love");

const marks = 100;

console.log(marks);