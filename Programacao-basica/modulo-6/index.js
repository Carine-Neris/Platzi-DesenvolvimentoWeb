var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/", hello);

function hello(req , res){
    res.send("Ola, Mundo");
}

aplicacao.get("/hora",hora);

function hora(req,res){
    res.send("<h1>A hora agora</h1> <br> <h3>A hora atual é: </h3>" + new Date().getHours() + " Horas");
}

aplicacao.listen(8989);
console.log("Aplicão em execução");

