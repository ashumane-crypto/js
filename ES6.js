//MOdern Javascript (ES6+) features
let name="Ashwini";
let age=20;
console.log("My name is " +name+" and my age is "+age); //old way of concatenating strings
console.log(`My name is ${name} and my age is ${age}`); //new way of concatenating strings using template literals

//Decontructing
const numbers=[1,2,3] //array destructuring
const [a,b,c]=numbers;
console.log(a,b,c);
console.log(numbers);

const person = {
    user: "Ashwini",
    age1: 21
};

const { user, age1 } = person; //object destructuring
console.log(person);

//Modules
import {add,subtract} from './math.js'; //importing functions from another file
console.log(add(2,3));
console.log(subtract(5,2));

//Map(),filter(),reduce() methods
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
];
const productNames = products.map(product => product.name); //map() method
console.log(productNames);

const expensiveProducts = products.filter(product => product.price > 10000); //filter() method
console.log(expensiveProducts);

const totalPrice = products.reduce((total, product) => total + product.price, 0); //reduce() method
console.log(totalPrice);
