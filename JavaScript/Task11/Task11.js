function calculate(operation){
let firstnum=Number(document.getElementById("numberInput1").value);
let secondnum=Number(document.getElementById("numberInput2").value);
let result=document.getElementById("result");
switch (operation){
    case ('add') :
        result.innerHTML="The result is : "+(firstnum+secondnum);
        break;
    case ('sub') :
        result.innerHTML="The result is : "+(firstnum-secondnum);
        break;
    case ('mul') :
        result.innerHTML="The result is : "+(firstnum*secondnum);
        break;
    case ('div') :
        result.innerHTML="The result is : "+(firstnum/secondnum);
        break;
    default :
        result.innerHTML="Please select a suitable operation";
}
}