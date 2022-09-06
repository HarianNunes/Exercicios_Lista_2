const e = require('prompt-sync')();
var código;
código = Number(e("Digite o código de origem do produto entre 1 e 30:"));
if (código == 1){
    console.log("A procedência do produto é Sul.");
}
else if (código == 2){
    console.log("A procedência do produto é Norte.");
}
else if (código == 3) {
    console.log("A procedência do produto é Leste.");
}
else if (código == 4) {
    console.log("A procedência do produto é Oeste.");
}
else if (código == 5 || código == 6) {
    console.log("A procedência do produto é Nordeste.");
}
else if (código == 7 || código == 8 || código == 9) {
    console.log("A procedência do produto é Sudeste.");
}
else if (código >= 10 && código <=20) {
    console.log("A procedência do produto é Centro-oeste");
}
else if (código >= 21 && código <=30) {
    console.log("A procedência do produto é Nordeste.");
}
else {
    console.log("Código inexistente. Por favor, digite um código entre 1 e 30.");
}