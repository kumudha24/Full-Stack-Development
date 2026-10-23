function waitTwoSecond(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data loaded after 2 seconds");
    },2000);
});
}

async function showMessage(){
    const messageDiv=document.getElementById("message");
    messageDiv.innerText="Loading";
    const result=await waitTwoSecond();
    messageDiv.innerText=result;
}