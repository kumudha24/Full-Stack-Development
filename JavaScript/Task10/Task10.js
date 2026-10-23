function info(){
let temp=Number(document.getElementById("temperatureInput").value);
let message=document.getElementById("message");
message.className="";
if(temp<20){
    message.innerHTML="Good Night!";
    message.classList.add("night");
}
else if(temp<50){
    message.innerHTML="Good Morning!";
    message.classList.add("morning");
}
else{
    message.innerHTML="Good Afternoon!";
    message.classList.add("afternoon");
}
}