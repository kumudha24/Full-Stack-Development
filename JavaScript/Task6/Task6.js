//Task-1 Print number 1 to 50
//for-loop
console.log("Numbers from 1 to 50:");
for(i=1;i<=50;i++){
    console.log(i);
}
//if condition
let a="print";
if(a=="print"){
    console.log("Numbers from 1 to 50:");
    for(i=1;i<=50;i++){
        console.log(i);
    }
}

//Task-2 Print Even numbers from 1 to 100
//for-loop
console.log("Even numbers from 1 to 100:");
for(i=1;i<=100;i++){
    let result=i%2;
    if(result==0){
        console.log(i);
    }
}

//Task-3 Print Multiplication table for 5
//for-loop
console.log("Multiplication table for 5");
for(i=0;i<=10;i++){
    let result=5*i;
    console.log("5 x",i,"=",result);
}

//Task 4 Find sum of numbers from 1 to 100
//for-loop
console.log("Sum of numbers from 1 to 100");
let sum=0;
for(i=1;i<=100;i++){
    sum+=i;
}
console.log("The sum of the numbers is:",sum);

//Task 5 Reverse count 10 to 1
//while-loop
console.log("Reverse count 10 to 1");
let j=10;
while(j>=1){
    console.log(j);
    j--;
}

//Task 6 Odd numbers 1 to 50
//while-loop
console.log("Odd numbers from 1 to 50");
let k=1;
while(k<=50){
    let result=k%2;
    if(k%2!=0){
        console.log(k);
    }
    k++;
}

//Task 7 Count digit in a number
//while-loop
let number=24526;
let count=0;
while(number>0){
    count++;
    number=Math.floor(number/10);
}
console.log("Number of Digits:",count);

//Task 8 Factorial
//dowhile-loop
let num=5;
let factorial=1;
let n=1;
do{
    factorial=factorial*n;
    n++;
}
while(n<=num);
console.log("Factorial is:",factorial);