window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var num1 = parseInt(document.getElementById("precio").value);
		var num2 = parseInt(document.getElementById("cantidad").value);
		var num3 = parseInt(document.getElementById("dscto").value);
		if(num1>=1 && num2>=1 && num3>=1){
			var resultado = document.getElementById("resultado");
			resultado.innerHTML = "<p>El monto a pagar es " + total(num1,num2,num3).toFixed(2) + "</p>";
		} else{
			var resultado = document.getElementById("resultado");
			resultado.innerHTML = "<p>khá?! Ingresa un valor valido" + "</p>";
		}
		
	});

	function total(num1, num2, num3) {
		var suma=num1*num2;
		var descuento=(suma*num3)/100;

		return suma - descuento;
	}
});