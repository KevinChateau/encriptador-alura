

function encriptarbutton(){
    let textBox = document.querySelector("textarea").value;

    // Validar que el textbox no esté vacío
    if(textBox.trim() == ""){
        // alert("Campo de texto vacío");
        showAndHide("barra-lateral-1","barra-lateral-2");

    } else{
        showAndHide("barra-lateral-2","barra-lateral-1");

        //Colocar el texto encriptado
        document.getElementById("decrypted-text").textContent  = encrypt(textBox);

        //Limpiar textbox
        document.querySelector("textarea").value = "";
    }
}


function copybutton(){

    //Obtener el texto a copiar
    let copyText = document.getElementById("decrypted-text").textContent;
    
    //Guardando al portapapeles
    navigator.clipboard.writeText(copyText)
    .then(function() {
        //alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
        //alert("Error al copiar el texto. Por favor, intenta nuevamente.");
    });
    
}

function desencriptarbutton(){
    let textBox = document.querySelector("textarea").value;

    // Validar que el textbox no esté vacío
    if(textBox.trim() == ""){
        //alert("Campo de texto vacío");
        showAndHide("barra-lateral-1","barra-lateral-2");

    } else{

        showAndHide("barra-lateral-2","barra-lateral-1");

        //Mostrar el texto desencriptado
        document.getElementById("decrypted-text").textContent  = decrypt(textBox);

        //Limpiar textbox
        document.querySelector("textarea").value = "";
    }
}

function encrypt(texto){
    //Forma fácil
    let encryptedText = texto.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(texto){
    //Forma fácil
    let encryptedText = texto.replace(/enter/g, "e");
    encryptedText = encryptedText.replace(/imes/g, "i");
    encryptedText = encryptedText.replace(/ai/g, "a");
    encryptedText = encryptedText.replace(/ober/g, "o");
    encryptedText = encryptedText.replace(/ufat/g, "u");
    return encryptedText;
}

function showAndHide(showElement, hideElement){
    //Mostrar la segunda barra:
    document.getElementById(`${showElement}`).style.display = "block";

    // Ocultar la primera barra
    document.getElementById(`${hideElement}`).style.display = "none";
    
}