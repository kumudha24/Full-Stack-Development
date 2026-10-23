console.log("Kumudha");
function forloop(){
    let result="for-loop output: \n";
    for(let i=1;i<=5;i++){
        result+="number"+i+"\n";
    }
    document.getElementById("output").innerText=result;
}

function whileloop(){
    let result="while-loop output: \n";
    let i=1;
    while(i<=5){
        result+="number"+i+"\n";
        i++;
    }
    document.getElementById("output").innerText=result;
}

function dowhileloop(){
    let result="do-while output: \n";
    let i=1;
    do{
       result+="number"+i+"\n";
       i++; 
    }while(i<=5);
    document.getElementById("output").innerText=result;
}