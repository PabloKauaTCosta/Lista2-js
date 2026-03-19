let quantidadePecas = Number(prompt("Quantidade de peças:"));
let maquinas = 1;

function calcularTempoProducao(quantidadePecas, maquinas) {
    let producaoPorHoraPorMaquina = 15;
    let producaoPorHoraTotal = producaoPorHoraPorMaquina * maquinas;
    let horasNecessarias = quantidadePecas / producaoPorHoraTotal;
  
    return {
        quantidadePecas: quantidadePecas,
        maquinas: maquinas,
        producaoPorHoraTotal: producaoPorHoraTotal,
        horasNecessarias: horasNecessarias
    };
};

function calcular() {
    let resultado = calcularTempoProducao(quantidadePecas, maquinas);
    document.getElementById('resultadoGeral').innerHTML = `Tempo: ${resultado.horasNecessarias.toFixed(0)} horas`;
};

module.exports = calcularTempoProducao;