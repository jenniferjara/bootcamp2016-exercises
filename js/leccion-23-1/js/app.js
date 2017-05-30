window.addEventListener("load", function(){
	var boton = document.getElementById("empieza");
	boton.addEventListener("click", function(){
		var nombre = document.getElementById("name").value;
		var edad = document.getElementById("age").value;
		var sexo = document.getElementById("genero").value;

		var resultado = document.getElementById("resultado");
		var persona1 = new Person(nombre,edad,sexo);
		resultado.innerHTML = persona1.hablar();
	})

	function Person(nombre, edad, sexo) {
	    this.nombre = nombre;
	    this.edad = edad;
	    this.sexo = sexo;
	    this.mayorEdad = (this.edad >=18);

	    this.hablar = function(){
	    	return "Hola, mi nombre es " + (this.nombre) + ", tengo " + (this.edad) + " años" + " y soy" + ((this.mayorEdad) ? " mayor" : " menor") + " de edad";
	    }
	}
});
