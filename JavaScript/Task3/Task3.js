// let age=5;
// console.log("Logical AND",age>=35 && age<=100);//Both conditions should be satisfied then only we get true
// console.log("Logical OR",age==2||age==5);//Any one condition needs to be satisfied
// let a=false;
// console.log("Logical NOT",!a);

// const Age=22;
// const result=Age>=18?"Eligible":"Not Eligible";
// console.log(result);

// let age=10;
// if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }

// const number=6;
// if(number%2==0){
//     console.log("It is an even number");
// }
// else{
//     console.log("It is not an even number");
// }

let age=75;
if(age>=18){
    if(age>=60){
        console.log("You are a senior citizen");
    } 
    else{
        console.log("You are eligible to vote");
    }  
}
else{
    console.log("You are not eligible to vote")
}

let mark=75;
if(mark>=35){
    if(mark>=60){
        console.log("Grade 1");
    }
    else{
        console.log("Grade 2");
    }
}
else{
    console.log("Failed");
}

let num=0;
if(num<0){
    console.log("Negative Number");
}
else if(num>0){
    console.log("Positive Number");
}
else{
    console.log("The number is zero");
}

let colour="yellow";
switch(colour){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Ready to move");
        break;
    default :
        console.log("Wait");
}

let temp=40;
if(temp>30){
    console.log("Very Hot");
}
else if (temp>20){
    console.log("Hot");
}
else{
    console.log("Normal");
}

let username="Kumudha";
if(username==="Kumudha"){
    console.log("Login Successful");
}
else{
    console.log("Login Failed");
}