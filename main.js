
const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){

e.preventDefault();
let name = document.getElementById('nombre').value 
let secondName = document.getElementById('apellido').value
let texto =(`hola ${name} ${secondName}, gracias por rellenar el formulario de LarnU`)
saludo.innerHTML= texto
})