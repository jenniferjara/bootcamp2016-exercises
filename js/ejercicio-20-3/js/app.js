var num = parseInt(prompt("Ingresa un número"));
var tiempo = parseInt(prompt("Ingresa los segundos que desees"));
var segundos = tiempo*1000;

function contar(numero){
	setInterval(function(){ 
		dgt.innerHTML=num++ + "... "; 
	}, segundos);
}
contar(num);
