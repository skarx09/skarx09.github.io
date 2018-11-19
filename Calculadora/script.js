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
}
function txtdelete(){	
	erase = document.getElementById("tempototal");
	erase.innerHTML='';
	cap = document.getElementById("CapIni").value;
	juros = document.getElementById("Juros").value;
	qtmeses = document.getElementById("Time").value;
	cap = Number(parseFloat(cap.replace(',','.')));
	juros = Number(parseFloat(juros.replace(',','.')));
	qtmeses = Number(parseFloat(qtmeses.replace(',','.')));
	test();
}
function test(){
	if(Number.isNaN(cap) || Number.isNaN(juros) || Number.isNaN(qtmeses)){
		var rr = document.getElementById("result");
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
		var pct = saldo.toFixed(2);
		acumulo.innerHTML += "Capital durante o "+cont+"°" +"Mês é: "+pct+"." + "<br>";
		document.body.appendChild(acumulo);
	}
	saldo = cap*Math.pow(1+(juros/100),qtmeses);
	var r = document.getElementById("result");
	r.innerHTML = "Seu Saldo: " + pct;
}
init();
