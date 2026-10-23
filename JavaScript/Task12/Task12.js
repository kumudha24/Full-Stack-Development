function perform(action){
    let number=document.getElementById("numberInput");
    let num=Number(number.value);
    let result=document.getElementById("result");
    if(action==='increment'){
        num=num+1;
    }
    else if(action==='decrement'){
        num=num-1;
    }
    else{
        num=0;
    }
    number.value=num;
}