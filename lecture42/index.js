//Print hello 10 times

// for(let i=1;i<=10;i++){
//     console.log("hello");
// }

// let i =1;
// while(i<=10){
//     console.log('hello world')
//     i++;
// }

//Print 1 to 5

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let p=1;
// while(p<=5){
//     console.log(i);
//     p++;
// }

//print 5 to 1

// for(let i=5;i>0;i--){
//     console.log(i);
// }

// let m=5;
// while(m>0){
//     console.log(m);
//     m--;
// }

//break

// for(let i=0;i<=5;i++){
//     if(i==5){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//continue

// for(let i =0;i<=4;i++){
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// do while loop 

let i=1 ;
do{
    console.log(i);
    i++;
} while(i<5);

//string 

let name1 = "how are you";
console.log(name1);

let name2 = 'what are you doing ';
console.log(name2);

let name3 = `hyy what are 
you do , i am doing well , where are you from
,i am from mathura`;
console.log(name3);

let name4 = new String("hay what are you doing right now ");
console.log(name4);

// concatination

let op1 = "english ";
let op2 = "hindi";
// let final_answer = op1 + op2;
let final_answer = `${op1}${op2}`;
console.log(final_answer);

//length of string 
console.log(op1.length);


//upparcase and lowercase
console.log(op1.toUpperCase());
console.log(op1.toLowerCase());

//substring
console.log(op1.substring(2));

//split string

// let sentence = "hello jee kaise ho saare ";
// let words = sentence.split(' ');
// console.log(words);
 
// let sentence = "hello jee \"kaise\" ho saare ";
// console.log(sentence);

let sentence = "hello \\jee \\kaise \\ho \\saare";
let words = sentence.split('\\');
console.log(words);
