const e = require('prompt-sync')();
var senha;
senha = Number(e("Digite a senha de acesso:"));
if (senha == 4531) {
    console.log("Acesso permitido");
}
else {
    console.log("Acesso negado");
}