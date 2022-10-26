import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('blur',(input) => {
        valida(input.target);
    });
});

document.querySelectorAll("textarea").forEach(input=>{
    input.addEventListener('blur',(input)=>{
        valida(input.target);
    })
})