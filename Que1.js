// 1. Positive, Negative, or Zero
let num=2;
if (num=0){
    console.log("The number is zero");
} else if (num>0){
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}

// 2. Even or Odd
let num1=7;
if (num1%2==0){
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// 4. Largest of Three Numbers
let num2=11, num3=16;num4=9;
if (num2>=num3 && num2>=num4) {
    console.log(num2+" is the largest number");
} else if (num3>=num2 && num3>=num4) {
    console.log(num3+" is the largest number");
} else {
    console.log(num4+" is the largest number");
}

// 5.Switch Statement
let day=3;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}