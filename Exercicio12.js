const e=require('prompt-sync')();
var salario, grat1, grat2, grat3, grat4;
salario = Number(e("Digite o salário do funcionario a receber a gratificação:"));
grat1 = (salario*0.07)+100+salario;
grat2 = (salario*0.07)+75+salario;
grat3 = (salario*0.07)+50+salario;
grat4 = (salario*0.07)+35+salario;
if (salario <= 350) {
    console.log("Gratificação a receber: R$100,00",);
    console.log("Salário total somando o salario + gratificação - 7% de impostos:",grat1);
}
else if (salario > 350 && salario <= 600) {
    console.log("Gratificação a receber: R$75,00",);
    console.log("Salário total somando o salario + gratificação - 7% de impostos:",grat2);
}
else if (salario > 600 && salario <= 900) {
    console.log("Gratificação a receber: R$50,00");
    console.log("Salário total somando o salario + gratificação - 7% de impostos:",grat3);
}
else {
    console.log("Gratificação a receber: R$35,00");
    console.log("Salário total somando o salario + gratificação - 7% de impostos:",grat4);
}