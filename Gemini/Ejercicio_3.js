
// 1. Entrada: El dato inicial
let subtotal = 20; // <-- Puedes cambiar esto (prueba con 40)

// 2. Proceso (Decisión):
let coste_envio; 

if (subtotal > 50) {
   // Opción 1: Envío gratis
   coste_envio = 0; 
} else {
   // Opción 2: Cuesta 10
   coste_envio = 10;
}

// 3. Proceso (Cálculo final):
let precio_total = subtotal + coste_envio;

// 4. Salida:
console.log(precio_total);