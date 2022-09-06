const e = require('prompt-sync')();
var altura, sexo, pesoideal, man, woman;
console.log("SEXO DA PESSOA:");
console.log("(1) Homem");
console.log("(2) Mulher");
sexo = e("Qual o sexo da pessoa?:");
altura = Number(e("Digite a altura da pessoa:"));
man = parseFloat((72.7*altura)-58).toFixed(3);
woman = parseFloat((62.1*altura)-44.7).toFixed(3);
if (sexo == 1) {
    console.log("Peso ideal: ",man,"Kg");
}
else if (sexo == 2) {
    console.log("Peso ideal: ",woman,"Kg");
}
else {
    console.log("Sexo inválido. Por favor, escolha um dos sexos da tabela.");
}