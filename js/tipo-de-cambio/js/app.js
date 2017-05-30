window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var numero1 = parseFloat(document.getElementById("cambio").value);
		var numero2 = parseFloat(document.getElementById("soles").value);

		var resultado = document.getElementById("resultado");

		if(numero2 && numero1){
			resultado.innerHTML = "<p>El resultado es " + calcula(numero1,numero2) + " dólares</p>";
		} else {
			alert("Ingrese un valor númerico");
			document.getElementById("cambio").value="";
			document.getElementById("soles").value="";
		}
	});

	function calcula(numero1, numero2) {
			var dolares=numero2/numero1;
			return dolares.toFixed(2);
	} 
});