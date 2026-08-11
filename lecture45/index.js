// class hoisting

//     let p = new person();

//    class person{

//    }


//let and const are not hoisted

// console.log(b);
// let b =20;

// console.log(c);
// const c = 30;


// variable hoisting
console.log(a);
var a = 10;


// function hoisting
sayName("akhilesh is the best programmer in the world");
function sayName(name){
    console.log(name);
}


let greet = function(){
    console.log("hello jee kaise ho app log");
}
greet();


//function being passed as an argument (first-class function).

function aap( fullname){
    console.log("the full name of your :" ,fullname);
    app();
}

function app(){
    console.log("app is the best application");
}

aap( "akhilesh chaudhary");



//Function as return value
function add(number){
    return function(num){
        return num*num;
    }
}
let ans = add(5); 
let finalAns = ans(10);
console.log(finalAns);


//function can stored in the datastructure
const arr = [
    function(a,b){
        return a+b;
    },
     function(a,b){
        return a-b;
    },
     function(a,b){
        return a*b;
    },

]
let people = arr[0];
let person = people(3,10);
console.log(person);

//tore a function in a normal JavaScript object.

const purson = {
    name: "Akhilesh",
    age:10,
    class:12,
    greeet: function() {
        console.log("Hello");
    }
};

purson.greeet();


//function expression + var hoisting.

var greeeeet;

console.log(greeeeet);

greeeeet = function() {
    console.log("Namaste Dunia");
};

