//Function without Parameters
function greet(){  // Function Declaration
    console.log("Hello World"); // Function Body
 }
 greet()


// 2.Function with Parameters
function square(num){  // Function Declaration
    console.log(num*num); // Function Body

}
square(5);// Function Call

// 3.Multiple Parameters
function add(a,b){
    console.log(a+b);
}
add(5,9);

// 4.Return statement
function multi(a1,b1){
    return a1*b1;
}
let result=multi(5,6);
console.log(result);