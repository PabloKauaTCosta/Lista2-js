let km = Number(document.getElementById('km').value);
let litros = Number(document.getElementById('litros').value);

function calcularConsumo(km, litros) {
    return {
        distanciaKm: km,
        combustivelLitros: litros,
        consumoMedio: km / litros
    };
};

function calcularResultado() {
    let resultado = calcularConsumo(km, litros);

    document.getElementById('resultadoFinal').innerHTML =
    `Km: ${resultado.distanciaKm}<br>
    Litros: ${resultado.combustivelLitros}<br>
    Consumo: ${resultado.consumoMedio.toFixed(1)} km/L`;
};