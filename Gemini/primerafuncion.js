// Ahora la función "devuelve" un resultado (un Booleano: true/false)
function esContraseñaValida(pass_para_verificar) {
   if (pass_para_verificar.length >= 8) {
      return true;  // Devuelve "VERDADERO"
   } else {
      return false; // Devuelve "FALSO"
   }
}

// 1. LLAMAMOS y "CAPTURAMOS" el resultado en una variable
let resultado1 = esContraseñaValida("brugal");
let resultado2 = esContraseñaValida("hola");

// 2. AHORA NOSOTROS decidimos qué hacer con el resultado
console.log(resultado1); // Muestra: false
console.log(resultado2); // Muestra: false

// La usamos directamente en un IF
if ( esContraseñaValida("miPasswordSecreta") ) {
   console.log("Acceso permitido. ¡Bienvenido!");
} else {
   console.log("Acceso denegado. La contraseña es muy corta.");
}