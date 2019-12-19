/* manipular o elemento(Get Element By Id)*/

var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var x = 50;
var y = 50;


function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial,yInicial);
    papel.lineTo(xFinal,yFinal);
    papel.stroke();
    papel.closePath();
}

desenha("pink", 10 , 10 , 150, 150);