const e=require('prompt-sync')();
var escolha, n1, n2, op1, op2, op3, op4;
n1=Number(e("Digite o primeiro número:"));
n2=Number(e("Digite o segundo número:"));

console.log("Operação:");
console.log("(1) Média entre os números digitados:");
console.log("(2) Diferença do maior pelo menor:");
console.log("(3) Produto entre os números digitados:");
console.log("(4) Divisão do primeiro número pelo segundo número:");

console.log("Escolha do usuário:");
console.log("(1)");
console.log("(2)");
console.log("(3)");
console.log("(4)");

escolha=Number(e("Qual operação deseja realizar?:"));
op1=(n1+n2)/2;
op2=(n1-n2);
op2_1=(n2-n1);
op3=n1*n2;
op4=n1/n2;
if (escolha==1){
    console.log("A média entre as notas é:",op1);
}
else if (escolha == 2 && n1>n2){
    console.log("A diferença entre as notas é:",op2);
}
else if (escolha == 2 && n2>n1) {
    console.log("A diferença entre as notas é:",op2_1);
}
else if (escolha == 3) {
    console.log("O produto das notas é:",op3);
}
else if (escolha == 4 && n2>0 ) {
    console.log("O resultado da divisão entre as notas é:",op4);
}
else if (escolha == 4 && n2==0){
    console.log("O segundo número deve ser diferente de 0 (zero)");
}
else {
    console.log("Opção inexistente");
}