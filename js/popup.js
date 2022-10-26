popup= document.getElementById("formcontato__send");


function openPopUp(){
    //window.location.href="./contacto_enviado.html";
    
    popup.classList.add("formcontato__send--open");
    
}

function closePopUp(){
    popup.classList.remove("formcontato__send--open");
    
    //window.location.href="./index.html";
    
}

function mostrar(){
    const menu = document.getElementById("menu__container");
    menu.style.display="block";
    setTimeout(() => { 
         menu.style.display="none"; }, 5000);


}