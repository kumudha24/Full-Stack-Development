//if else 
let year=2024;
if((year%4==0 && year%100!==0) || (year%400==0)){
    console.log(year,"It is a leap year");
} 
else{
    console.log(year,"It is not a leap year");
}

//switch
switch(true){
    case (year%400==0):
        console.log(year,"It is a leap year");
        break;
    case (year%4==0 && year%100!=0):
        console.log(year,"It is a leap year");
        break;
    default:
        console.log(year,"It is not a leap year");
}