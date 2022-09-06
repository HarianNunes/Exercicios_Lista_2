const e=require('prompt-sync')();
var preçoatual, codigo, p1, p2, preçofinal;
preçoatual = Number(e("Digite o valor atual do produto a ser acrescido:"));
p1= (preçoatual*0.1)
p2= (preçoatual*0.15)
if (preçoatual <= 30) {
    console.log("Valor atual:",preçoatual);
    console.log("Valor a ser acrescido: 0");
    console.log("Novo valor:",preçoatual);
}
else if (preçoatual >30 && preçoatual <= 100){
    console.log("Valor atual:",preçoatual);
    console.log("Valor a ser acrescido:",p1);
    console.log("Novo valor:",p1+preçoatual);
}
else {
    console.log("Valor atual:",preçoatual);
    console.log("Valor a ser acrescido:",p2);
    console.log("Novo valor:",p2+preçoatual);
}