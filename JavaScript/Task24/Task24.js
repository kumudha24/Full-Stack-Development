let circle=document.getElementById("circle");
circle.addEventListener("mouseover",function(){
    circle.style.transform="scale(1.3)";
});
circle.addEventListener("mouseout",function(){
    circle.style.transform="scale(1)";
})