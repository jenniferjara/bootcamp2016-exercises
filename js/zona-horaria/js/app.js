function mueveReloj(){ 
   	var momentoActual = new Date();
   	var hora = momentoActual.getHours(); 
   	var minuto = momentoActual.getMinutes(); 
   	var segundo = momentoActual.getSeconds(); 

   	var str_segundo = new String (segundo); 
	   	if (str_segundo.length == 1) 
	      	segundo = "0" + segundo 

	   	str_minuto = new String (minuto) 
	   	if (str_minuto.length == 1) 
	      	minuto = "0" + minuto 

	   	str_hora = new String (hora) 
	   	if (str_hora.length == 1) 
	      	hora = "0" + hora 

   	var horaImprimible = hora + " : " + minuto + " : " + segundo;
   	document.form_reloj.reloj.value = horaImprimible 

   	var resultadoNY = (hora+1)%24 + " : " + minuto + " : " + segundo;
      document.form_reloj.reloj_extra.value = resultadoNY;

   	setTimeout("mueveReloj()",1000) /*llama a la funcion y el retardo ese de un segundo; ejecuta una funcion despues de un tiempo*/ 
}
	