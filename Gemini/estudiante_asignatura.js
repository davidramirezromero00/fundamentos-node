let notaPractica = 10;
let notaTeorica = 4;
if (notaPractica >= 5 && notaTeorica >= 5) {
    console.log("¡Asignatura Aprobada!");  
} else {
    console.log("Asignatura Suspendida");   
}

function estaAprobado(notaPractica, notaTeorica) {
    if (notaPractica >= 5 && notaTeorica >= 5) {
        return true;
    } else {
        return false;
    } 
}

console.log(estaAprobado(8, 6)); 
console.log(estaAprobado(10, 7));