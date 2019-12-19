/* manipular o elemento(Get Element By Id)*/

var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 37,
    Rigth: 39,
    Down: 40,
    Left: 37
}

var x = 50;
var y = 50;

/* Ouvindo Eventos atravez do click do botao */
var botao = document.getElementById("botao");
botao.addEventListener("click", desenhaLinhaVermelha);

/* Ouvindo Eventos que vem do document */
document.addEventListener("keydown", verTecla);

function verTecla(event){
    /* console.log(event); */
    
    switch(event.keyCode){
        case teclas.Down:
            console.log("clicou para baixo");
        break;
    }
}



function desenhaLinhaVermelha(){
    desenha("red", x , y , 200, 200);
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

desenha("blue", x + 150 , y , 200, 200);