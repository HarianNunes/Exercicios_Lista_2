const e = require('prompt-sync')();
var cdg, qtd, soma, preço, p1, p2, p3, unitário;
cdg = Number(e("Digite o código do produto:"));
qtd= Number(e("Digite a quantidade comprada:"));


if (cdg >=1 && cdg <=10) {
    preço = 10;
}
else if (cdg >=11 && cdg <= 20) {
    preço = 15;
}
else if (cdg >=21 && cdg <= 30) {
    preço = 20;
}
else if (cdg >=31 && cdg <= 40){
    preço = 30;
}
soma= preço*qtd;
p1= (preço * 0.05) - preço;
p2= (preço * 0.1) - preço;
p3= (preço * 0.15) - preço;


if (preço >= 250){
    console.log("O preço unitário do produto é:",preço);
    console.log("O preço total da nota é:",soma);
    console.log("O valor descontado é de:",p1);
    console.log("O preço final é de:",p1+soma);
}
else if (preço > 250 && preço <= 500) {
    console.log("O preço unitário do produto é:",preço);
    console.log("O preço total da nota é:",soma);
    console.log("O valor descontado é de:",p2);
    console.log("O preço final é de:",p2+soma);
}
else {
    console.log("O preço unitário do produto é:",preço);
    console.log("O preço total da nota é:",soma);
    console.log("O valor descontado é de:",p3);
    console.log("O preço final é de:",p3+soma);
}