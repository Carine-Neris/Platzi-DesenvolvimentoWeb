var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;

var pesoTerra = prompt("Digite o peso do objeto na terra: ");

var planeta = prompt("Qual planeta deseja saber o peso(Digite Marte ou Jupter)?");


if(planeta.toLowerCase() === "marte"){
    var pesofinal = (pesoTerra / gTerra) * gMarte;
    document.write("O peso do objeto em Marte é: " + pesofinal);
}else if( planeta.toLowerCase() === "jupter"){
    pesofinal = (pesoTerra / gTerra) * gJupter;
    document.write("O peso desse objeto em Jupter é " + pesofinal);
}else{
    alert("Digite um planeta valido");
}



