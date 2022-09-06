const e=require('prompt-sync')();
var produto, perc1, perc2, perc3;
produto = Number(e("Digite o valor do produto para receber acrécimo:"));
perc1= produto*0.05+produto;
perc2= produto*0.1+produto;
perc3= produto*0.15+produto;
if (produto <= 50) {
    console.log("O percentual de aumento sobre o valor do produto será de 5%.");
    console.log("O valor do produto com o percentual de aumento é:",perc1);
}
else if (produto > 50 && produto <= 100) {
    console.log("O percntual de aumento sobre o valor do produto será de 10%.");
    console.log("O valor do produto com o percentual de aumento é:",perc2);
}
else {
    console.log("O percentual de aumento sobre o valor do produto será de 15%.");
    console.log("O valor do produto com o percentual de aumento é:",perc3);
}