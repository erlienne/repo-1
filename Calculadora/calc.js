let resultado = '';
let operacaoAtual = null;
let numero1 = null;

function adicionarNumero(numero) {
    resultado += numero;
    document.getElementById('resultado').value = resultado;
}

function operacao(op) {
    if (resultado === '') return;
    if (numero1 === null) {
        numero1 = parseFloat(resultado);
    }
    operacaoAtual = op;
    resultado = '';
}

function calcular() {
    if (resultado === '' || numero1 === null || operacaoAtual === null) return;

    const numero2 = parseFloat(resultado);
    let total;
    switch (operacaoAtual) {
        case '+':
            total = numero1 + numero2;
            break;
        case '-':
            total = numero1 - numero2;
            break;
        case '*':
            total = numero1 * numero2;
            break;
        case '/':
            total = numero1 / numero2;
            break;
    }
    resultado = total.toString();
    document.getElementById('resultado').value = resultado;
    operacaoAtual = null;
    numero1 = null;
}

function limpar() {
    resultado = '';
    operacaoAtual = null;
    numero1 = null;
    document.getElementById('resultado').value = '';
}
