#Traducción de Formulario

En este ejercicio se pide cambiar el idioma al formulario sin cambiar el contenido del HTML y solo usando selectores en el archivo js. 

![imagen](http://i63.tinypic.com/2mwxic0.jpg)

(en el primer commit esta la versión en inglés.)

##Solución
* Para cambiar el titulo: document.getElementById("Id del titulo en HTML").innerHTML = "Con el texto en español".
* Para cambiar el placeholder de ambos input: document.getElementById("Id del input").placeholder = "Con el texto en español".
* Para cambiar el contenido del span: document.querySelector("span").innerHTML = "con el texto en español".
* Para cambiar el texto del boton: document.querySelector("button").innerHTML = "con el texto en español".
	