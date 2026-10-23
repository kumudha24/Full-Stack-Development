let Name="Kumudha";
console.log(Name);
let message=`Welcome to Chennai`;
console.log(message);

let student=" Kumudha Shree B ";
let msg=`Welcome ${student}`;
console.log(msg);
console.log(msg.length);
console.log(msg[2]);
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.trim());
console.log(msg.includes("Shree"));
console.log(msg.slice(0,4));
console.log(student.slice(2,8));
console.log(student.replace(" Kumudha Shree B ","Rithika"));

let firstname="Rithika";
let lastname="Ananthan";
console.log("Name:",firstname+" "+lastname);
console.log(`Name= ${firstname} ${lastname}`);

let firstnam="Rithika";
let firstnam1="Rithika";
console.log(firstnam===firstnam1);

let username="Kumudha";
if(username==="Kumudha"){
    console.log("Login Successful");
}
else{
    console.log("Invalid Username");
}

let email="kumudhashree.2004@gmail.com";
if(email.includes("@")){
    console.log("Valid email id");
}
else{
    console.log("Invalid email id");
}

let fruit1="apple";
let fruit2="banana";
let fruit3="orange";
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

let fruits=["apple","banana","orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);//undefined
fruits[1]="mango";
console.log(fruits);
fruits.push("kiwi");//added at the last
console.log(fruits);
fruits.pop();//removes lastly added element
console.log(fruits);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){//fruit is a dummy variable
    console.log(fruit);//for each loop
}

let number=[10,20,30,40,50];
console.log(number.includes(25));
console.log(number.indexOf(20));

let total=0;
let marks=[98,72,56,90,36];
for(let mark of marks){
    total+=mark;//shorthand property
}
console.log(total);