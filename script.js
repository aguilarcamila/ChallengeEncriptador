document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const copyBtn = document.getElementById("copy-btn");
    const errorMessage = document.getElementById("error-message");

    // Función para validar el texto ingresado
    function validateInput(text) {
        const regex = /^[a-z\s]+$/;  // Solo letras minúsculas y espacios
        return regex.test(text);
    }

    // Función para encriptar el texto
    function encryptText(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Evento de clic para encriptar
    encryptBtn.addEventListener("click", () => {
        const text = inputText.value.trim();
        if (!validateInput(text)) {
            errorMessage.textContent = "Solo se permiten letras minúsculas sin acentos ni caracteres especiales.";
            outputText.textContent = "Ningún mensaje fue encontrado";
            return;
        }
        errorMessage.textContent = "";
        outputText.textContent = encryptText(text);
    });

    // Evento de clic para desencriptar
    decryptBtn.addEventListener("click", () => {
        const text = inputText.value.trim();
        if (!validateInput(text)) {
            errorMessage.textContent = "Solo se permiten letras minúsculas sin acentos ni caracteres especiales.";
            outputText.textContent = "Ningún mensaje fue encontrado";
            return;
        }
        errorMessage.textContent = "";
        outputText.textContent = decryptText(text);
    });

    // Evento de clic para copiar al portapapeles
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar el texto: " + err);
            });
    });
});