function calcularAreaTerreno(largura, comprimento, valorM2) {
    let area = largura * comprimento;
    let resultado = {
        largura: largura,
        comprimento: comprimento,
        area: area
    };
    
    if (valorM2) {
        resultado.valorMetroQuadrado = valorM2;
        resultado.valorTerreno = area * valorM2;
    };
    
    return resultado;
};

function calcularResultado() {
    let l = Number(document.getElementById('largura').value);
    let c = Number(document.getElementById('comprimento').value);
    let vm2 = Number(document.getElementById('valorM2').value) || 0;

    let resultadoFinal = calcularAreaTerreno(l, c, vm2);

    let html = `Largura: ${resultadoFinal.largura} m<br>` +
    `Comprimento: ${resultadoFinal.comprimento} m<br>` +
    `Área: ${resultadoFinal.area} m²`;
    
    if (resultadoFinal.valorTerreno) {
        html += `<br>Valor: R$ ${resultadoFinal.valorTerreno.toLocaleString('pt-BR')}`
    };
    
    document.getElementById('resultadoFinal').innerHTML = html;
};