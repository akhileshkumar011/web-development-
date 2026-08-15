class Human {
    // properties
    age = 20;
    #ht = 5.6; // private property
    wt = 65;

    //methods
    call() {
        console.log("calling..." , this.age, this.#ht, this.wt);
    }

    galaxy() {
        console.log("Milky Way");
    }

    //getter
    get getvalu() {
        return this.#ht;
    }

    //setter
    set setvalue(ht){
        this.#ht = ht;
    }

    //constructor
    constructor( newage, newheight, newWeight){
        this.age = newage;
        this.#ht = newheight;
        this.wt = newWeight;
    }
}

let human1 = new Human(25, 5.8, 70);
console.log(human1.age);
console.log(human1.getvalu);
console.log(human1.wt);
// console.log(human1.#ht);  // Error: Private field '#ht' must be declared in an enclosing class

human1.call();
human1.galaxy();     



//default paremeters

function sum(a=5, b =10) {
    return a +b ;
}
   console.log(sum());
   console.log(sum(52));
// console.log(sum(5 , 15)); 



function sayname( name = "akhilesh" , age = 20){
    console.log(name,age);
}
console.log(sayname());
console.log(sayname("John", 30));


function sayHello(firstName = "tamim", lastName = firstName.toUpperCase()){
    console.log(firstName, lastName);
}
sayHello();



//“Default parameters can be objects, allowing a function to use predefined values when no argument is passed.”

function solve(value = { age: 15, wt: 90, ht: 190 }) {
    console.log("HELLO JI", value);
}

solve();


//Default parameters can be arrays, providing predefined values when no argument is passed.
function solve(value = [15, 90, 190]) {
    console.log("HELLO JI", value);
}

solve();



//undefined → default value is used
function solve(value = 10) {
    console.log(value);
}

solve(undefined);



//null → default value is NOT used
function solve(value = 10) {
    console.log(value);
}

solve(null);



//a function call as a default parameter.
function utility(name = "Love", age = getAge()) {
    console.log(name, age);
}