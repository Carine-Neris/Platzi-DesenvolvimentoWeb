/* número aleatório
    Math.random()
retorna um número entre 0 e 0.999 */


/* retorna o piso de um numero */
//Math.floor()


/* retorna o proximo numero inteiro */
//Math.ceil()

/* número aleatorio entre x e y */
//Math.floor(Math.random() * (x-y) + 1 ) + x

function numeroAleatorio(x,y){
    return Math.floor(Math.random()*(y-x)+1) + x;
}

var num = 10;

for(var i=0; i < num; i++){
    console.log(numeroAleatorio(100,200));
}
