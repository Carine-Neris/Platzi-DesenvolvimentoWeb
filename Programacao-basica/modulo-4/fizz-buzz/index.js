
var botao =  document.getElementById("botao");

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz(){
    var numeroIteracoes = document.getElementById("numeroIteracoes").value;
    var resultado = document.getElementById("resultado");

    alert("O número de iterações é "+ numeroIteracoes );
    var numero = 1

    while(numero <= numeroIteracoes){

        if( (numero%3) === 0 && (numero%5) === 0){

            resultado = document.write(numero + " FizzBuzz " + "<br>")

        }else if((numero%3) === 0){
            resultado = document.write(numero + " Fizz " + "<br>")

        }else if ( (numero%5) === 0){
            resultado = document.write(numero + " Buzz " + "<br>")
        }else{
            resultado = document.write(numero + "<br>")
        }
        numero++;
    }
}


var fizzbuzz = document.getElementById("fizzbuzz");
fizzbuzz.innerHTML = "Resolvendo o Fizz Buzz";
