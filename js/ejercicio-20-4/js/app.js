window.addEventListener("load", function(){
	var time=parseInt(prompt("Cantidad de segundos:"));
    var segundos=time*1000; 

	var boton = document.getElementById("go");
	boton.addEventListener("click", function () {
		
		setInterval(color, segundos);
	});

	function color(){ 
			document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		}
});
