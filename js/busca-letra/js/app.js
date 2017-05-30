var palabra=prompt("ingresa una palabra");
var letra=prompt("ingrese la letra");

function letras(palabra,letra){
	var longitud=palabra.length;
	var contador=0;
	for(var i=0;i<longitud;i++){
		if(palabra[i]==letra){
			contador++;
		}
	} document.write("La letra "+letra+" sale "+contador+" en la palabra "+palabra);
}
letras(palabra,letra);