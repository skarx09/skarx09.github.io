var btn;
var cap;
var juros;
var saldo;
var qtmeses;
var cont;
var acumulo;


function init(){
	btn = document.getElementById("btn_calc");
	btn.addEventListener("click", test );
}
function test(){
	cap = Number(document.getElementById("CapIni").value);
	juros = Number(document.getElementById("Juros").value);
	qtmeses = Number(document.getElementById("Time").value);
 
	if(Number.isNaN(cap) || Number.isNaN(juros) || Number.isNaN(qtmeses)){
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
		$("div").text("");
		acumulo.innerHTML += "Capital durante o "+cont+"°" +" Mês é: "+saldo+"." + "<br>";
		document.body.appendChild(acumulo);
	}
	saldo = cap*Math.pow(1+(juros/100),qtmeses);
	var r = document.getElementById("resultado");
	r.innerHTML = "Seu Saldo: " + saldo;
}
init();


/*Primeiro Erro, as informações utilizadas na estrutura de repetição estão se sobrepond;
  Segundo Erro, a estruturação do IF e do Else Estava incorreto*/

