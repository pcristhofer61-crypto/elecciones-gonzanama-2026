
// SISTEMA DE PARTICIPACION CIUDADANA

const casillas = document.querySelectorAll(
    '.lista input[type="checkbox"]'
);

const progreso = document.getElementById("progreso");
const relleno = document.getElementById("relleno");

function actualizarProgreso() {

    let completadas = 0;

    casillas.forEach(function(casilla) {

        if (casilla.checked) {
            completadas++;
        }

    });

    const total = casillas.length;

    const porcentaje = (completadas / total) * 100;

    progreso.textContent =
        completadas + " de " + total +
        " recomendaciones completadas.";

    relleno.style.width = porcentaje + "%";

}

casillas.forEach(function(casilla) {

    casilla.addEventListener(
        "change",
        actualizarProgreso
    );

});

console.log("Página Elecciones 2026 - Gonzanamá");
console.log("Elaborado por: Cristhofer Pacheco");
console.log("Fecha: 29 de noviembre de 2026");
