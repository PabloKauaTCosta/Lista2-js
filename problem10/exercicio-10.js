function calcularVelocidadeMedia(distanciaKm, tempo, unidade) {
    let tempoHoras = unidade === "min" ? tempo / 60 : tempo;
    let velocidade = distanciaKm / tempoHoras;
    
    return {
        distanciaKm: distanciaKm,
        tempoHoras: tempoHoras,
        velocidadeMedia: velocidade
    };
};

function calcularResultado() {
    let km = Number(document.getElementById('km').value);
    let valorTempo = Number(document.getElementById('valorTempo').value);
    let unidade = document.getElementById('tempo').value;
    
    let resultado = calcularVelocidadeMedia(km, valorTempo, unidade);
    
    document.getElementById('resultadoFinal').innerHTML =
        `Distância: ${resultado.distanciaKm} km<br>` +
        `Tempo: ${resultado.tempoHoras} h<br>` +
        `Velocidade: ${resultado.velocidadeMedia.toFixed(1)} km/h`;
}