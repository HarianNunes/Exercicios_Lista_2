const e=require('prompt-sync')();
var escolha, n1, n2, op1, op2, op3;
n1=Number(e("Digite o primeiro número:"));
n2=Number(e("Digite o segundo número:"));
op1=(n1+n2)/2;
op2=n1-n2;
op2_1=n2-n1;
op3=n1*n2;
console.log("Escolha do usuário:");
console.log("(1)");
console.log("(2)");
console.log("(3)");

console.log("Operações:");
console.log("(1) Média entre os dois números.");
console.log("(2) Diferença do maior pelo menor.");
console.log("(3) O produto entre os dois números.");

escolha=Number(e("Qual opereção deseja realizar?:"));
if (escolha == 1) {
    console.log("A média entre os dois números é:",op1);
}
else if (escolha == 2 && n1>n2) {
    console.log("A média entre os dois números é:",op2);
}
else if (escolha == 2 && n2>n1) {
    console.log("A média entre os dois números é:",op2_1);
}
else if (escolha == 3 ) {
    console.log("O produto entre os dois números é:",op3);
}
else {
    console.log("Operação inexistente.");
}
