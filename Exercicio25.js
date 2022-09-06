const e = require('prompt-sync')();
var horaextra, horasfalta, premio, h;
horaextra=Number(e("Quantas horas extras o funcionário trabalhou?:"));
horasfalta=Number(e("Quantas horas o funcionário faltou?:"));
h=((horaextra) - (2/3)) * ((horasfalta));

if (h < 600) {
    console.log("O funcionário receberá uma bonificação no total de R$100,00");
}
else if (h >= 600 && h < 1200) {
    console.log("O funcionário receberá uma bonificação no total de R$200,00");
}
else if(h >=1200 & h < 1800) {
    console.log("O funcionário receberá uma bonificação no total de R$300,00");
}
else if(h >=1800 && h < 2400) {
    console.log("O funcionário receberá uma bonificação no total de R$400,00");
}
else {
    console.log("O funcionário receberá uma bonificação no total de R$500,00");
}
console.log("Premio=", h);