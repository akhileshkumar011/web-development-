// // let obj = {
// //     name : "ram",
// //     age : 20,
// //     address : "Mathura",
// //     height : 5.8,

// //     greet : function(){
// //         console.log("hello jee kaise ho app log");
// //     }
// // };
// //  console.log(obj);
// //  obj.greet(  );


// //creation of array
// let arr = [1,2,"love",true,5,6];

// console.log(arr);

// //array constructor
// let arr1 = new Array(1,2,3,4,5,6);
// console.log(arr1);

// //accessing the array elements
// console.log(arr[1]);
// console.log(arr1[4]);

// //java script array methods


// let an1 = [1, 2 , 3, 4];
// an1.push("ram");
// // an1.pop();
// an1.shift();
// an1.unshift("hello ji app kaise ho ");
// an1.push(7);
// an1.push(9);
// an1.push(10);

// // console.log(an1);
// // console.log(an1.slice(1,4));
// an1.splice(0,2,"ram")
// console.log(an1);


//map method in array
// let arr = [1,2,3,4,5,6,7];
// let square = arr.map((number)=>{
//     return number*number;
// })
// console.log(square);

// let arr1 = [1,2,3,4,5,6,7];
// let squar = arr1.map((number,index)=>{
//    console.log(number+1,index);
// });


//filter

// let arr = [1,2,3,4,5];
// let even = arr.filter(
//     (number)=>{
//         if(number%2==0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// );
// console.log(even);
// let arr = [1,2 ,'ram','love'];
// let fil = arr.filter(
//     (value)=>{
//         if(typeof(value)=='string'){
//             return value;
//         }
//         else{
//             return false;
//         }
//     }
// );
// console.log(fil);


//reduce

// let arr = [1,2,3,4,5];
// let red = arr.reduce(
//     (acc,curr) =>{
//         return acc+curr;
//     }
// )
// console.log(red);


//sort
// let arr = [1,8,3,7,0];
// arr.sort();
// console.log(arr);

//index of element
// console.log(arr.indexOf(8));


