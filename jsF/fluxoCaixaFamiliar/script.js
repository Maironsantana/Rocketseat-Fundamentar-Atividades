
let saldoFamilia = {
    receitas: [
        2000.00,
        3000.00,
        550.0
    ],
    despesas: [
        60.00,
        220.00,
        200.00,
        600.00,
        400.00
    ]
}

function somar(vetor){
    let total = 0;
    
    for(let valor of vetor){
        total += valor;
    }

    return total;
}


function calcularGastos(){
    const calcularReceita = somar(saldoFamilia.receitas);
    const calcularGastos = somar(saldoFamilia.despesas);
    const saldoTotal = calcularReceita - calcularGastos;

    let ePositivo = saldoTotal >= 0;

    let saldoTexto = 'negativo';
    if(ePositivo){
        saldoTexto = 'positivo';
    }
    
    console.log('O saldo da familia está ' + saldoTexto + '. O valor do saldo é: ' + saldoTotal.toFixed(2));
}

calcularGastos(saldoFamilia);