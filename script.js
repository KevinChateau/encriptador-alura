

function encriptarbutton(){
    let textBox = document.querySelector("textarea").value;

    // Validar que el textbox no esté vacío
    if(textBox.trim() == ""){
        alert("Campo de texto vacío");
    } else{
        // Ocultar la primera barra
        document.getElementById("barra-lateral-1").style.display = "none";
        //Mostrar la segunda barra:
        document.getElementById("barra-lateral-2").style.display = "initial";

        
        document.getElementById("decrypted-text").innerHTML = encrypt(textBox);
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

function copybutton(){
    //AQUI NOS QUEDAMOSSSS
    let copyText = document.getElementById("decrypted-text").value;
    let textBox = document.querySelector("textarea").value;

    console.log(copyText);
    console.log(textBox);
    
    navigator.clipboard.writeText(copyText)
    .then(function() {
        alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
        alert("Error al copiar el texto. Por favor, intenta nuevamente.");
    });
    
}