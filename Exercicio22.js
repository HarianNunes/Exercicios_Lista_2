const e = require('prompt-sync')();
var idade, peso;
idade = Number(e("Digite a idade da pessoa:"));
peso = Number(e("Digite o peso da pessoa:"));
if (idade < 20 && peso <=60) {
    console.log("O grupo de risco correspondente à pessoa é: 9");
}
else if (idade < 20 && peso > 60 && peso <=90) {
    console.log("O grupo de risco correspondente à pessoa é: 8");
}
else if (idade <20 && peso > 90) {
    console.log("O grupo de risco correspondente à pessoa é: 7");
}
else if (idade >= 20 && idade <=50 && peso <= 60){
    console.log("O grupo de risco correspondente à pessoa é: 6");
}
else if (idade >= 20 && idade <=50 && peso >60 && peso <= 90){
    console.log("O grupo de risco correspondente à pessoa é: 5");
}
else if (idade >= 20 && idade <=50 && peso >90){
    console.log("O grupo de risco correspondente à pessoa é: 4");
}
else if (idade > 50 && peso <=60) {
    console.log("O grupo de risco correspondente à pessoa é: 3");
}
else if (idade > 50 && peso >60 && peso <=90){
    console.log("O grupo de risco correspondente à pessoa é: 2");
}
else {
    console.log("O grupo de risco correspondente à pessoa é: 1");
}