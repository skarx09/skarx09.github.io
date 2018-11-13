var btn;
var cap;
var juros;
var saldo;
var qtmeses;
var cont;
var acumulo;
var erase;
function init(){
	btn = document.getElementById("btn_calc");
	btn.addEventListener("click", txtdelete);
	btn.addEventListener("click", test );
}
function txtdelete(){	
	erase = document.getElementById("tempototal");
	erase.innerHTML='';		
}
function test(){
	cap = Number(document.getElementById("CapIni").value);
	juros = Number(document.getElementById("Juros").value);
	qtmeses = Number(document.getElementById("Time").value);
	if(Number.isNaN(capp) || Number.isNaN(juros) || Number.isNaN(qtmeses)){
		var rr = document.getElementById("resultado");
		rr.innerHTML = "Valor(es) Inválido(os), favor corrigir!";	
	}
	else{
		calcula();
	}
}
function calcula(){
	for(cont= 1;cont <= qtmeses;cont++){
		saldo = cap*Math.pow(1+(juros/100),cont);
		acumulo = document.getElementById("tempototal");
		acumulo.innerHTML += "Capital durante o "+cont+"°" +"Mês é: "+saldo+"." + "<br>";
		document.body.appendChild(acumulo);
	}
	saldo = cap*Math.pow(1+(juros/100),qtmeses);
	var r = document.getElementById("result");
	r.innerHTML = "Seu Saldo:" + saldo;
}
init();
