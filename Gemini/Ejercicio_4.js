
// 1. Entrada: Los datos iniciales
let nombre = "David";
let apellido = "Ramirez";

// 2. Proceso: Tomar la primera letra (el "vagón" en la posición 0)
let primera_letra = nombre[0]; // Esto da "A"

// 3. Proceso: Unir (concatenar) las piezas
let usuario_temporal = primera_letra + apellido; // Esto da "ALópez"

// 4. Proceso: Aplicar la herramienta de minúsculas
let usuario_final = usuario_temporal.toLowerCase(); // Esto da "alopez"

// 5. Salida: Mostrar el resultado
console.log(usuario_final);