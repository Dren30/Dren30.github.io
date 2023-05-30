
function encriptar(){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let patron_de_letras = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]]
    let texto = document.getElementById("mensaje").value;
    const ocultar_muneco = document.getElementById("resultado").style.backgroundImage = "none";
    const ocultar_mensaje = document.getElementById("mensaje-no-encontrado").style.visibility = "hidden";
    const ocultar_boton_copiar = document.getElementById("boton-copiar").style.visibility = "visible";

    // checks if the string contains uppercase letters
    if (/[A-Z]/.test(texto) == false && specialChars.test(texto) == false){
        
        for(let i = 0; i < patron_de_letras.length; i++){
            
            if (texto.includes(patron_de_letras[i][0])){
                texto = texto.replaceAll(patron_de_letras[i][0], patron_de_letras[i][1])
            }

        }

        return document.getElementById("resultado").innerText = texto;
    }
    else{
        alert("No utilizar letras mayusculas ni caracteres especiales.")
        location.reload();
    }

        
}

function desencriptar(){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let patron_de_letras = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]]
    let texto = document.getElementById("mensaje").value;
    const ocultar_muneco = document.getElementById("resultado").style.backgroundImage = "none";
    const ocultar_mensaje = document.getElementById("mensaje-no-encontrado").style.visibility = "hidden";
    const ocultar_boton_copiar = document.getElementById("boton-copiar").style.visibility = "visible";
  



    if (/[A-Z]/.test(texto) == false && specialChars.test(texto) == false){
        
        for(let i = 0; i < patron_de_letras.length; i++){
            
            if (texto.includes(patron_de_letras[i][1])){
                texto = texto.replaceAll(patron_de_letras[i][1], patron_de_letras[i][0])
            }

        }

        return document.getElementById("resultado").innerText = texto;
    }
    else{
        alert("No utilizar letras mayusculas ni caracteres especiales.")
        location.reload();
    }
        
}

function copiar(){

   /* Select text area by id*/
   let text = document.getElementById("resultado");
  
   /* Select the text inside text area. */
   text.select();

   /* Copy selected text into clipboard */
   navigator.clipboard.writeText(text.value);

}

