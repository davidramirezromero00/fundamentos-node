let cuenta = 120;
function decidirPostre(cuenta) {
    if (cuenta >= 100) {
        return "POSTRE GRATIS";
    } else {
        return "SIN POSTRE";
    }
}console.log(decidirPostre(cuenta));