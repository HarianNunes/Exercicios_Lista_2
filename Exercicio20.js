
const e= require('prompt-sync')();
var idade;
idade = Number(e("Digite a idade do atleta nadador:"));
if (idade >= 5 && idade <= 7) {
    console.log("O nadador pertence à categoria infantil.");
}
else if (idade >=8 && idade <= 10){
    console.log("O nadador pertence à categoria juvenil.");
}
else if (idade >=11 && idade <=15){
    console.log("O nadador pertence à categoria adolescente.");
}
else if (idade >=16 && idade <=30){
    console.log("O nadador pertence à categoria adulto.");
}
else {
    console.log("O nadador pertence à categoria sênior.");
}