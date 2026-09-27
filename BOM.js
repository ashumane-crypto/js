//Browser Object Model

//alert
function showMessage(){
    alert("Hellooo");
}

//confirm
let result=confirm("Are you sure?");
console.log(result);

//promt (get input from user)
let name=prompt("Enter your name");
console.log(name);

//setTimeout()
setTimeout(()=>{
    console.log("hello");
},3000); //3sec

//setInterval()
setInterval(()=>{
    console.log("hello");
},1000); //1sec


