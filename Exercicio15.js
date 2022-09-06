const e = require('prompt-sync')();
var tipo, valor, rend1, rend2;
valor = Number(e("Digite o valor a ser investido:"));
console.log("TIPOS DE INVESTIMENTO:");
console.log("(1) Poupança");
console.log("(2) Fundos de renda fixa");
tipo = Number(e("Qual o tipo de investimento deseja realizar?:"));
rend1 = valor * 1.03;
rend2 = valor * 1.04;
if (tipo == 1) {
    console.log("Tipo de investimento selecionado: Poupança");
    console.log("Será acrecido 3% de aumento sobre o valor investido.");
    console.log("O valor somado do percentual de aumento será de:", rend1);
}
else if (tipo == 2) {
    console.log("Tipo deinvestimento selecionado: Fundos de renda fixa");
    console.log("Será acrecido 4% de aumento sobre o valor investido.");
    console.log("O valor somado do percentual de aumento será de:", rend2);
}
else {
    console.log("Opção inválida. Por favor, digite uma das opções da tabela.");
}