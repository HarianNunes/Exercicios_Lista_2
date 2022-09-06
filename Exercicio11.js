const e=require('prompt-sync')();
var salariofuncionario, p1, p2, p3, p4, final;
salariofuncionario=Number(e("Digite o valor do salário do funcionário:"));
p1=salariofuncionario*1.15;
p2=salariofuncionario*1.1;
p3=salariofuncionario*1.05;
p4=salariofuncionario*1;
if (salariofuncionario <= 300) {
    console.log("O salário reajustado é:",p1);
}
else if (salariofuncionario >300 && salariofuncionario <=600) {
    console.log("O salário reajustado é:",p2);
}
else if (salariofuncionario >600 && salariofuncionario <=900) {
    console.log("O salário reajustado é:",p3);
}
else {
    console.log("O salário reajustado é:",p4);
}
