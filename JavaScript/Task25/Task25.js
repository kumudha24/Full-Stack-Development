let cards=document.querySelectorAll(".card-inner");
cards.forEach(function(card){
    card.addEventListener("click", function(){
        card.classList.toggle("flipped");
    });
});