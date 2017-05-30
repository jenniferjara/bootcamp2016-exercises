function validateForm(){
	var az = /^[a-zA-Z]+$/;
	var nombre = document.getElementById("name").value;
	if (nombre == null || nombre == "") {
	        var span = document.createElement("span");
	        var ref = document.getElementById("name");
	        var padre = ref.parentNode;
	        padre.insertBefore(span, ref);
	        var text = document.createTextNode("Debe ingresar su nombre");
	        span.appendChild(text);
	        return span;
	    }
	    if (nombre.charAt(0) == nombre.charAt(0).toLowerCase()) {
	    	alert("La primera letra debe ser Mayuscula");
	    }
	    if (!az.test(nombre)){
	        alert("Ingresa sólo letras.");
	    }
	var apellido = document.getElementById("lastname").value;
	    if (apellido == null || apellido == "") {
	        var span = document.createElement("span");
	        var ref = document.getElementById("last-name");
	        var padre = ref.parentNode;
	        padre.insertBefore(span, ref);
	        var text = document.createTextNode("Debe ingresar su apellido");
	        span.appendChild(text);
	        return span;
	    }
	    if (apellido.charAt(0) == apellido.charAt(0).toLowerCase()) {
	    	alert("La primera letra debe ser Mayuscula");
	    }
	    if (!az.test(lastname)){
	        alert("Ingresa sólo letras.");
	    }
    //e-mail
    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(email) ){
        var span = document.createElement("span");
        var ref = document.getElementById("input-email");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("Verifique su e-mail");
        span.appendChild(text);
        return span;
    }
	var pass = document.getElementById("input-password").value;
		if(pass == "123456" || pass =="password" || pass == "098754"){
			var span = document.createElement("span");
		    var ref = document.getElementById("input-password");
		    var padre = ref.parentNode;
			padre.insertBefore(span, ref);
	        var text = document.createTextNode("Cambie de contraseña");
	        span.appendChild(text);
	        return span;
		}else if(pass.length < 5){
			var span = document.createElement("span");
		    var ref = document.getElementById("input-password");
		    var padre = ref.parentNode;
			padre.insertBefore(span, ref);
	        var text = document.createTextNode("La contarseña debe tener al menos 6 caracteres");
	        span.appendChild(text);
	        return span;
		}
	var bici = document.getElementsByTagName("select")[0].value;
	if ( bici == 0){
			var span = document.createElement("span");
	        var ref = document.getElementsByTagName("select")[0];
	        var padre = ref.parentNode;
	        padre.insertBefore(span, ref);
	        var text = document.createTextNode("Seleccione el tipo de bici");
	        span.appendChild(text);
	        return span;
	}
}