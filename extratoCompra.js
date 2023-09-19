const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 30000;


const valorDaParcela = valorDoProduto / quantidadeDoParcelamento
const parcelaRestante = quantidadeDoParcelamento - valorPago / valorDaParcela
console.log(`
Retam ${parcelaRestante} parcela de R$ ${(valorDaParcela / 100).toFixed(2)}
`);