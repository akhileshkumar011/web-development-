// function Defination

function sayMyName(){
    console.log("I have no girl friend");
}
//function calling 
//   sayMyName();


// printing of counting 

// function counting(){
//     for(let i =0;i<=100;i++){
//         console.log(i);
//     }
// }

// counting();


//printing a number 

function print(num){
    console.log("the number is : ", num)
}
print(5);


function average(num1 , num2){
    let avg = (num1 + num2)/2;
    console.log("Average: " ,avg);
}
average(3,5);

/// addition with add function
function add(a, b ,c){
    let addd = a+b+c;
    return addd ;
}
 let add1 =add(5,3,2);
 console.log(add1);

 // addition of the string using function

 function getName(first_name , second_name){
    let fullName = first_name + " " + second_name;
    return fullName;
 }
 let fullname = getName("ram" , "kishan");
 console.log(fullname);

 // 
 function app(num){
    return num;
 }
let ass= app(5);
console.log(ass);

let func1 = function(num1 , num2){
    let app = num1* num2; 
    return app;
}
const multi = func1(4,5);
console.log(multi) ;

