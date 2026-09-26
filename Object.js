//Object stores the data in key value pairs. It is a non-primitive data type.
let student={
    name:"Ashwini",
    age:20,
    gender:"Female",
}
console.log(student); //accessing the object
console.log(student.name); //accessing the value of name key

student.age=21; //updating the value of age key
console.log(student);

student.city="Pune"; //adding a new key value pair to the object
console.log(student);
delete student.gender; //deleting the key value pair from the object

//Object with functions
let user={
    fname:"Ashwini",
    greet:function(){
        console.log("Hello "+this.fname);
    }
};
user.greet();

//Map function in object
const userAges = { alice: 25, bob: 30, charlie: 35 };

// Double every person's age
const updatedAges = Object.fromEntries(
  Object.entries(userAges).map(([key, value]) => [key, value * 2])
);

console.log(updatedAges);
// Output: { alice: 50, bob: 60, charlie: 70 }
