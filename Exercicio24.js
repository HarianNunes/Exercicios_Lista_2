const e = require('prompt-sync')();
var preço, categoria, situacao, valoraumento, imposto, calc1, calc2, calc3, calc4, calc5, calc6, imp, novopreço, np1, np2, np3, np4, np5, np6;
preço = Number(e("Digite o preço do produto:"));
console.log("CATEGORIAS:");
console.log("(1) Limpeza");
console.log("(2) Alimentação");
console.log("(3) vestuário");
categoria = Number(e("Digite a categoria do produto:"));
console.log("SITUAÇÃO:");
console.log("(R) Produtos que necessitam de refrigeração");
console.log("(N) Produtos que não necessitam de regrigeração");
situacao = e("Qual a situacao do produto?:");

calc1=Number(preço*0.05);
calc2=Number(preço*0.08);
calc3=Number(preço*0.1);
calc4=Number(preço*0.12);
calc5=Number(preço*0.15);
calc6=Number(preço*0.18);



if (categoria == 2 && situacao == "R") {
    imp = Number(preço*0.05);
}
else {
    imp = Number(preço*0.08);
}

np1=Number((preço+calc1)-imp);
np2=Number((preço+calc2)-imp);
np3=Number((preço+calc3)-imp);
np4=Number((preço+calc4)-imp);
np5=Number((preço+calc5)-imp);
np6=Number((preço+calc6)-imp);

if (preço <= 25 && categoria == 1) {
    console.log("O valor de aumento será de:",calc1);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np1);
    novopreço = np1;
}
else if (preço <= 25 && categoria == 2){
    console.log("O valor de aumento será de:",calc2);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np2);
    novopreço = np2;
}
else if (preço <= 25 && categoria == 3) {
    console.log("O valor de aumento será de:",calc3);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np3);
    novopreço = np3;
}
else if (preço > 25 && categoria == 1){
    console.log("O valor de aumento será de:",calc4);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np4);
    novopreço = np4;
}
else if (preço > 25 && categoria == 2){
    console.log("O valor de aumento será de:",calc5);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np5);
    novopreço = np5;
}
else {
    console.log("O valor de aumento será de:",calc6);
    console.log("O valor do imposto será de:",imp);
    console.log("O novo preço será de:",np6);
    novopreço = np6;
}

if (novopreço <= 50) {
    console.log("O produto é classificado como: Barato");
}
else if (novopreço > 50 && novopreço < 120) {
    console.log("O produto é classificado como: Normal");
}
else {
    console.log("O produto é classificado como: Caro");
}