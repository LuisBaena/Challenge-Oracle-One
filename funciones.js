document.addEventListener('DOMContentLoaded', function() {

    // Obtener los elementos del DOM
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const encryptRadio = document.querySelector('input[value="encrypt"]');
    const decryptRadio = document.querySelector('input[value="decrypt"]');
    const submitBtn = document.getElementById('submit-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    // Funciones de encriptación y desencriptación
    function encrypt(text) {
      return text.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');
    }
  
    function decrypt(text) {
      return text.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');
    }
  
    // Función para encriptar o desencriptar el texto
    function processText() {
      const action = encryptRadio.checked ? 'encrypt' : 'decrypt';
      const text = input.value.trim().toLowerCase();
      let result = '';
      if (action === 'encrypt') {
        result = encrypt(text);
      } else {
        result = decrypt(text);
      }
      output.value = result;
    }
  
    // Event listeners
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      processText();
    });
  
    copyBtn.addEventListener('click', function(event) {
      event.preventDefault();
      output.select();
      document.execCommand('copy');
    });
  
  });
  