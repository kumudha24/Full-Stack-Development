function sayHello(){
    alert("Hello button clicked");
}
let button=document.getElementById("myBtn");
button.addEventListener("dblclick",function(){
    alert("Button double clicked");
});

let text=document.getElementById("text");
text.addEventListener("mouseover",function(){
    text.innerText="Mouse is over me";
text.addEventListener("mouseout",function(){
    text.innerText="Mouse is out of me";
})
})