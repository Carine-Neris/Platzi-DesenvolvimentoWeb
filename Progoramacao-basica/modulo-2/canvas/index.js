/* manipular o elemento(Get Element By Id)*/

var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Rigth: 39,
    Down: 40,
    Left: 37
}

var x = 50;
var y = 50;
var movimento = 10;
document.addEventListener("keydown", desenharLinha);


/* Ouvindo Eventos atravez do click do botao */
    //var botao = document.getElementById("botao");
    //botao.addEventListener("click", desenhaLinhaVermelha);


/* Ouvindo Eventos que vem do document */
    //document.addEventListener("keydown", verTecla);

function desenharLinha(event){

    switch(event.keyCode){
        case teclas.Down:
            desenha("red", x, y , x, y + movimento);
            y = y + movimento;
        break;
        case teclas.Rigth:
            desenha("red", x, y , x + movimento, y);
                x = x + movimento;
        break;
        case teclas.Left:
            desenha("red", x, y , x - movimento, y);
            x = x - movimento;
        break;
        case teclas.Up:
            desenha("red", x, y , x, y - movimento);
            y = y - movimento;
        break;
    }
}


function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidth = 3;
    papel.moveTo(xInicial,yInicial);
    papel.lineTo(xFinal,yFinal);
    papel.stroke();
    papel.closePath();
}
