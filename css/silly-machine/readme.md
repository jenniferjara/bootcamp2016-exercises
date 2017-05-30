###SILLY MACHINE
![Imagen Antes](http://4.1m.yt/iiWHinD.png "Imagen")

###CASO CRI
En el caso del cri se nos pide hacer una página que al hacer un clic al boton este cambie de color en el borde de cada a una de los circulos de la página de forma iterativa. También solicita que el nombre del circulo este escrito en el input del form.

####SOLUCIÓN 

1. Hacer un script el que incluye eventos, uno de ellos es el click, que nos permitira ejecutar una accion en el botón CRI. la acción que se ejecutara será que aparezca un borde de color en cada uno de los círculos.

![Imagen conteo](http://4.1m.yt/U4lVSEL.png "Imagen")

2. Para lograr el primer requerimientos solicitado teniamos que crear una secuencia iterativa que permita cambiar el estilo de bordes por cada clic, para eso utilizamos el siguiente formato:
El nombredocument.getElementById("color").value sirve para poner el valor string del nombre del círculo en el input.
El document.getElementById("bolaUno").classList.add("") y document.getElementById("bolaTres").classList.remove(""); hacen una secuencia. agrega la clase con el formato del borde y elimina el anterior que trae como colacion, si se nota en la parte final del conteo, este inicia de nuevo en cero que hace que sea ciclico y útil el uso de esta técnica.

Para los tres circulos:

![Imagen cri](http://3.1m.yt/66fD6u9.png "Imagen")


###CASO SUPERCRI
En el caso del Suppercri se nos pide hacer una página al llenar en el input el color del circulo, este cambie de color de borde al hacer clic en el boton supercri.

####SOLUCIÓN 

1. Hacer un script el que incluye eventos, uno de ellos es el click, que nos permitira ejecutar una accion en el botón SUPERCRI. la acción que se ejecutara será que aparezca un borde de color en el circulo el cual es elegido por el usuario y llenado en el input.
2. Se crea una variable que contenga el valor ingresado por el input y se compara su valor en una condicion que al comprobar el nombre del circulo, escogera el circulo indicado y dara el formato borde deseado.

![Imagen supercri](http://4.1m.yt/PqEx7iU.png "Imagen")

