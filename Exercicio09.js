const e=require('prompt-sync')();
var saldomedio, p1, p2, p3, p4, credito;
saldomedio=Number(e("Digite o valor do saldo médio do cliente:"));
p1=saldomedio*1.3;
p2=saldomedio*1.25;
p3=saldomedio*1.2;
p4=saldomedio*1.1;

if (saldomedio > 400) {
    console.log("O saldo médio do cliente é:",saldomedio);
    console.log("O valor do crédito é:",p1);
}
else if (saldomedio <= 400 && saldomedio > 300) {
    console.log("O saldo médio do cliente é:",saldomedio);
    console.log("O valor do crédito é:",p2);
}
else if (saldomedio <= 300 && saldomedio > 200) {
    console.log("O saldo médio do cliente é:",saldomedio);
    console.log("O valor do crédito é:",p3);
}
else {
    console.log("O saldo médio do cliente é:",saldomedio);
    console.log("O valor do crédito é:",p4);
}
