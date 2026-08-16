//object cloning 
//it has three ways to clone an object
//1. using spread operator

let src = {
    age: 12,
    wt: 68,
    ht: 180
};

// here we are cloning the object using spread operator and there is reference of src object is not copied to dest object. so if we change the value of src object it will not affect the dest object.
let dest = { ...src };

// here we make exact copy of src object and the reference of src object is copied to dest object. so if we change the value of src object it will affect the dest object.
// let dest = src;

src.age = 90;

console.log("src:", src);
console.log("dest:", dest);



//2. using Object.assign() method

let src1 ={
    age: 12,
    wt: 68,
    ht: 180
}

let src2 ={
    age: 20,
    wt: 70,
    ht: 5.8
}

let dest1 = Object.assign({}, src1,src2);  // here we are cloning the object using Object.assign() method and there is reference of src1 object is not copied to dest1 object. so if we change the value of src1 object it will not affect the dest1 object.

src1.age = 90;

console.log("src1:", src1 , "src2:", src2);
console.log("dest1:", dest1);



//3. cloning using iteration

let src3 ={
    age :45,
    wt :80,
    ht :5.9,
}
let dest3 ={};

for(let key in src3){
    let value = src3[key];
    dest3[key] = value;
}
src3.age = 90;
console.log("src3:", src3);
console.log("dest3:", dest3);