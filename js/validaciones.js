let allValidated=false;
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid){
        input.style.borderColor="green";
        // input.parentElement.classList.remove("input--error");
        input.parentElement.querySelector(".input--error").innerHTML ="";
    }else{
        input.style.borderColor="red";
        //input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input--error").innerHTML =mostrarMensajeDeError(tipoDeInput,input);
    }

    const tipos = document.querySelectorAll(".formcontato__input");
    
    for (let tipo of tipos){
        if(tipo.validity.valid){
            allValidated=true;
        }else{
            allValidated=false;
        }
    }
    
    if (allValidated){   
     document.getElementById("submit").disabled=false;
    }

    
}

const mensajesDeError= {
    nombre: {
        patternMismatch:"No puede superar los 50 caracteres",
        valueMissing:"Este campo no puede estar vacío"
    },
    email:{
        valueMissing: "Este campo no puede ser vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto:{
        valueMissing: "Este campo no puede ser vacío",
        patternMismatch: "No puede superar los 50 caracteres"
    },
    mensaje:{
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "No puede superar los 300 caracteres",

    },
       
}

const validadores={
    nacimiento: (input) => validarNacimiento(input),
    };

const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch","customError",];



function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje ="";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    });
    return mensaje;
}















