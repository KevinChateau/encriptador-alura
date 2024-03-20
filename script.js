

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



//   function ajustarAltura() {
//     var windowHeight = window.innerHeight; // Obtiene la altura total de la pantalla del dispositivo
//     var textarea = document.getElementById("text-tarea");
//     var porcentajeAltura = 40; // Porcentaje deseado del alto total de la pantalla del dispositivo
//     textarea.style.height = (windowHeight * porcentajeAltura / 100) + "px"; // Calcula la altura del textarea en base al porcentaje y la establece
//   }
  
//   // Ajusta la altura del textarea al cargar la página
//   window.onload = function() {
//     ajustarAltura();
//   };
  
//   // Ajusta la altura del textarea al cambiar el tamaño de la ventana
//   window.onresize = function() {
//     ajustarAltura();
//   };