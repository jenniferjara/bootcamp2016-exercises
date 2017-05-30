function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var az = /^[a-zA-Z]+$/;
	    if (nombre, apellido == null || nombre, apellido == "") {
	        alert("Datos obligatorios");
	    }
	    if (nombre.charAt(0) == nombre.charAt(0).toLowerCase() || apellido.charAt(0) == apellido.charAt(0).toLowerCase()) {
	    	alert("La primera letra debe ser Mayuscula");
	    }
	    if (!az.test(name) || !az.test(lastname)){
	        alert("Ingresa sólo letras.");
	    }
    //password
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
	var pass = document.getElementById("input-password").value;
		if(pass == "123456" || pass =="password" || pass == "098754"){
			alert("Por favor escriba otra contraseña");
		}else if(pass.length < 5){
			alert("Contraseña al menos de 6 caracteres");
		}
	var bici = document.getElementsByTagName("select")[0].value;
	if ( bici == 0){
			alert("Selecciona tu tipo de bici");
	}
}