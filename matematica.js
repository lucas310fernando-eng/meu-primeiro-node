//funções matemáticas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// Exportando as funções para que outros arquivos possam acessá-las
module.exports = { 
    somar,
    subtrair,
    multiplicar,
    dividir
};