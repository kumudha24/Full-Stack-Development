function checkOddEven(){
    let input=document.getElementById("numberInput").value;
    let result=document.getElementById("result");
    result.className="";
    if(input===""){
        result.innerHTML="Please enter a number";
        result.classList.add("Error");
        return;
    }
    if(isNaN(input)){
        result.innerHTML="Please enter a valid number";
        result.classList.add("Error");
        return;
    }
    if(!Number.isInteger(Number(input))){
        result.innerHTML="Please enter a integer number";
        result.classList.add("Error");
        return;
    }
    let number=Number(input);
    if(number%2===0){
        result.innerHTML=number+" Is an even number";
    }
    else{
        result.innerHTML=number+" Is a odd number";
    }
    result.classList.add("Success");
}