let con=document.querySelector(".container_card");
let card = document.getElementById("menu_bar");

card.addEventListener("click",() =>{
    con.style.display="flex";
    // card.style.display="none";
})

let crossbutton=document.getElementById("close_menu")

crossbutton.addEventListener("click", () =>{
    con.style.display= "none";
    // card.style.display="flex";
    
})


