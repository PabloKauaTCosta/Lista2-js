function converterTemperatura(valor, tipo) {
    let resultado = {};
    
    if (tipo === "CtoF") {
        resultado.celsius = valor;
        resultado.fahrenheit = (valor * 9/5) + 32;
    } else {
        resultado.fahrenheit = valor;
        resultado.celsius = (valor - 32) * 5/9;
    }
    
    return resultado;
}

function calcularResultado() {
    let v = Number(document.getElementById('valorId').value);
    let tipo = document.getElementById('selectId').value;

    let resultado = converterTemperatura(v, tipo);

    let html = tipo === "CtoF" ?
        `${resultado.celsius}°C = ${resultado.fahrenheit.toFixed(1)}°F` :
        `${resultado.fahrenheit}°F = ${resultado.celsius.toFixed(1)}°C`;
        
    document.getElementById('resultadoFinal').innerHTML = html;
}