const e=require('prompt-sync')();
var custofabrica, custoconsumidor, pd1, pd2, pd3, imp1, imp2, calc1, calc2, calc3;
custofabrica=Number(e("Digite o custo de fábrica do carro:"));
pd1=1.05;
pd2=1.1;
pd3=1.15;
imp1=0.15;
imp2=0.2;
calc1=custofabrica*pd1;
calc2=(custofabrica*pd2)+(custofabrica*imp1);
calc3=(custofabrica*pd3)+(custofabrica*imp2);
if (custofabrica <= 12000) {
    console.log("O custo ao consumidor será:",calc1);
}
else if (custofabrica > 12000 && custofabrica <=25000) {
    console.log("O custo ao consumidor será:",calc2);
}
else {
    console.log("O custo ao consumidor será:",calc3);
}