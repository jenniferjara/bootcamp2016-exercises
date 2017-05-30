#Ejercicio 4
En el siguiente ejercicio se propone desarrollar un script que lea una cantidad de segundos que ingrese el usuario y luego de dar un click en el boton genera un color random que sea asignado en el color de fondo en el body.

* Primero se ejecuta el prompt donde el usuario ingresa la cantidad de segundos de intervalo almacenadas en una variable 'time'.
* El resultado de la variable 'time' es multiplicada por 1000 (para que java script pueda leer los segundos), y el resultado es almacenado en una variable llamada 'segundos'.
* Luego tenemos un evento para el boton donde se encuentra la funcion setInterval que llama al resultado de la variable 'segundos' y a la función 'color' y esta funcion ejecuta el cambio de color random en el body.
* Todo este proceso de cambio de color en la pagina se ejecuta despúes de dar un click al boton.