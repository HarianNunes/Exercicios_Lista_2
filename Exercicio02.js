const e=require('prompt-sync')();
var n1, n2, media;
n1=Number(e("Digite a nota 1:"));
n2=Number(e("Digite a nota 2:"));
media=(n1+n2)/2;
if (media < 4) {
    console.log("A média das notas é:",media);
    console.log("Reprovado!");
}
else if (media >= 4 && media <7) {
    console.log("A média das notas é:",media);
    console.log("Exame!");
}
else {
    console.log("A média das notas é:",media);
    console.log("Aprovado!");
}
