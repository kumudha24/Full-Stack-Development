let sunBtn = document.getElementById("sunBtn");
let moonBtn = document.getElementById("moonBtn");
sunBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
    });
moonBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
    });