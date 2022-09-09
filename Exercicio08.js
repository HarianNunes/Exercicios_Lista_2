const e=require('prompt-sync')();
var salariofuncionario, p1, p2, final;
salariofuncionario=Number(e("Digite o valor do salário do funcionário:"));
p1=salariofuncionario*1.35;
p2=salariofuncionario*1.15;
if (salariofuncionario <=300) {
    console.log("O salário reajustado equivale a:",p1);
}
else {
    console.log("O salário reajustado a:",p2);
}
