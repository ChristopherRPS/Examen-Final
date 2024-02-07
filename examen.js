function obtenerLicencia(edad, haAprobadoExamen) {
    if (edad >= 18) {
        if (haAprobadoExamen) {
            return "Puede obtener una licencia";
        } else {
            return "No puede obtener una licencia sin pasar el examen";
        }
    } else {
        return "No puede obtener una licencia debido a su edad";
    }
}

// impresion de la prueba y cobertura de sentencia
console.log(obtenerLicencia(20, true));

// impresion de la prueba y cobertura de decisión
console.log(obtenerLicencia(20, false));

// impresion de la prueba y cobertura de condición
console.log(obtenerLicencia(15, true));

// impresion de la prueba y cobertura de camino
console.log(obtenerLicencia(20, true));
console.log(obtenerLicencia(20, false));
console.log(obtenerLicencia(15, true));
