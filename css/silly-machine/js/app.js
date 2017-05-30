window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("color").value = "Greenyellow";
			document.getElementById("bolaUno").classList.add("b-pink");
			document.getElementById("bolaTres").classList.remove("b-violet");
		}
		if(contador == 2) {
			document.getElementById("color").value = "Darkred";
			document.getElementById("bolaDos").classList.add("b-gyellow");
			document.getElementById("bolaUno").classList.remove("b-pink");
		}
		if(contador == 3) {
			document.getElementById("color").value = "Grey";
			document.getElementById("bolaTres").classList.add("b-violet");
			document.getElementById("bolaDos").classList.remove("b-gyellow");
			contador = 0;
		}
		contador++;
	});
    
    var botonDos = document.getElementById("superCri");
    botonDos.addEventListener("click", function() {
		
        var color = document.getElementById("color").value;
        if (color == "Greenyellow" || color == "greenyellow"){
            document.getElementById("bolaUno").style.border = "4px solid darkred";
            document.getElementById("bolaDos").style.border = "0px solid darkred";
            document.getElementById("bolaTres").style.border = "0px solid darkred";
        } else if (color == "Darkred" || color == "darkred"){
            document.getElementById("bolaUno").style.border = "0px solid yellow";
            document.getElementById("bolaDos").style.border = "4px solid yellow";
            document.getElementById("bolaTres").style.border = "0px solid yellow";
        } else if (color == "Grey" || color == "grey"){
            document.getElementById("bolaUno").style.border = "0px solid violet";
            document.getElementById("bolaDos").style.border = "0px solid violet";
            document.getElementById("bolaTres").style.border = "4px solid violet";
        }
		
	});
});