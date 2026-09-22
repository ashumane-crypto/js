// Conditional Statement

// 1)If Statement
let age=21;
if (age>=18) {
    console.log("You are eligible");
}

// 2)If-Else Statement
let age2=17;
if (age2>=18) {
    console.log("You are eligible");
} else {
    console.log("You are not eligible");
}

// 3)If-Else If-Else Statement
let age3=20;
if (age3<13) {
    console.log("You are a child");
} else if (age3>=13 && age3<20) {
    console.log("You are a teenager");
} else {
    console.log("You are an adult");
}

// Loops

// 1) For Loop
for (let i=0; i<=5;i++) {
    console.log(i);
}

for (let j=5; j>=1; j--) {
    console.log(j);
}

// 2) While Loop
let k=1;
while (k<=5) {
    console.log(k);
    k++;
}

// 3) Do-While Loop
let l=1;
do {
    console.log(l);
    l++;
} while (l<=5);



