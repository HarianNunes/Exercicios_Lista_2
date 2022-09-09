const e=require('prompt-sync')();
var salariofuncionario, salarioreajustado, reajuste;
salariofuncionario=Number(e("Digite o valor do salário do funcionário:"));
reajuste=salariofuncionario*1.3;
if (salariofuncionario <500) {
    console.log("O salário é menor que R$500,00, portanto terá aumento de 30%");
    console.log("O valor do salário reajustado é:",reajuste);
}
else {
    console.log("O salário é maior  ou igual a R$500,00, logo, não sofrerá reajuste");
    console.log("O valor do salário reajustado é:",salariofuncionario, "Reais");
}
