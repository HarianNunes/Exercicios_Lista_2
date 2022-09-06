const e = require('prompt-sync')();
var idade;
idade = Number(e("Digite a sua idade atual:"));
if (idade < 18) {
    console.log("Você tem", idade, "anos.");
    console.log("Você é menor de idade.");
}
else {
    console.log("Você tem", idade, "anos.");
    console.log("Você é maior de idade.");
}