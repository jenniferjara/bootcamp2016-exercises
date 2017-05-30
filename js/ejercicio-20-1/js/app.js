function suma(num1) {
	return function(num2) {
	return num1 + num2;
	}
} 

var suma2 = suma(2);
var suma12 = suma(12);

sm1.innerHTML = suma2(5); // Debería mostrar 7 de resultado
sm2.innerHTML = suma12(76); // Debería mostrar 88 de resultado
