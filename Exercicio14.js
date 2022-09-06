const e=require('prompt-sync')();
var salario, p1, p2, p3, p4, p5, p6;
salario = Number(e("Digite o salario do funcionário:"));
p1= (salario*0.5)+salario;
p2= (salario*0.4)+salario;
p3= (salario*0.3)+salario;
p4= (salario*0.2)+salario;
p5= (salario*0.1)+salario;
p6= (salario*0.05)+salario;
if (salario <= 300) {
    console.log("O percentual de aumento sobre o salário é de 50%.");
    console.log("O salário atual somado com o percentual de aumento é:",p1);
}
else if (salario >300 && salario  <= 500) {
    console.log("O percentual de aumento sobre o salário é de 40%.");
    console.log("O salário atual somado com o percentual de aumento é:",p2);
}
else if (salario > 500 && salario <= 700) {
    console.log("O percentual de aumento sobre o salário é de 30%.");
    console.log("O salário atual somado com o percentual de aumento é:",p3);
}
else if (salario > 700 && salario <= 800) {
    console.log("O percentual de aumento sobre o salário é de 20%.");
    console.log("O salário atual somado com o percentual de aumento é:",p4);
}
else if (salario > 800 && salario <= 1000) {
    console.log("O percentual de aumento sobre o salário é de 10%.");
    console.log("O salário atual somado com o percentual de aumento é:",p5);
}
else {
    console.log("O percentual de aumento sobre o salário é de 5%.");
    console.log("O salário atual somado com o percentual de aumento é:",p6);
}