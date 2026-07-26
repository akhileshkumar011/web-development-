//Arithmatic orperation

let a = 5;
let b = 6;
console.log(a + b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a**b);


//Assignment operator

// a = a + 10;
a+=10;
console.log(a);

// a=a*10;
a*=10;
console.log(a);

//comparision operator

console.log(2>5);
console.log(4>2);
console.log(2>=2);
console.log(3<=2);
console.log(3!=5);
console.log('5'==5);
console.log(5==5);
console.log(5==='5');
console.log(5===5);

//ternary operator

let age = 5;
let status1 = (age>18) ? 'you can vote ' : 'you can not vote ';
console.log(status1);

//logical operator

// let ans = (true && true && true)
// console.log(ans);

// let ans = (false && true && true)
// console.log(ans);

// let ans = ( false || false || true);
// console.log(ans);

let ans = (false || false || false);
console.log(ans);

let apple = !(false );
console.log(apple);


//logical operator

console.log(false || 'ram');
console.log(false || "hello duniya ");
console.log(false || 7 || 8 || 9 );

// bitwise operator

console.log(5&2);
console.log(5|2);
console.log(~5);
console.log(2^6);
console.log(10>>1);
console.log(10<<1);


//conditionals 

let agi = 50 ;
if(agi >= 18){
    console.log('can vote');
}
else{
    console.log('can not able to vote');
}


let num = 15 ;
if (num==2){
    console.log('a');
}
else if(num==3){
    console.log('b');
}
else if(num==15){
    console.log('c');
}

let mango = 5;
switch(mango){
    case 1 : console.log('a');
    break;
    case 2 : console.log('b');
    break;
    case 3 : console.log('c');
    break;
    case 5 : console.log('d');
    break;
}