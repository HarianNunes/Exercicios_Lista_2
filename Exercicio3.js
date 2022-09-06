const e=require('prompt-sync')();
var numero1, numero2;
numero1=Number(e("Digite o primeiro número:"));
numero2=Number(e("Digite o segundo número:"));
if (numero1<numero2) {
    console.log("O menor número é:",numero1);
}
else if (numero1 == numero2) {
    console.log("Os numeros são iguais");
}
else {
    console.log("O menor número é:",numero2);
}