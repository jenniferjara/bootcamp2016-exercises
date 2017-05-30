#Ejercicio de la lección 23
Definir un constructor de una entidad Persona que tenga como propiedades: nombre (string), edad (number), sexo (string), mayor de edad (boolean),  un método que sea presentacion que retorne el mensaje:
 *Hola, mi nombre es nombre, tengo edad años y soy mayorDeEdad.*

##Solución
1. Tenemos tres input en donde ingresas nombre, edad y género.
2. En el js tenemos un evento en el boton 'click', en el hay tres variables para almacenar la info de los input.
3. Creamos una variable donde se almacena el resultado.
4. Déspues tenemos un Objeto Constructor que almacena propiedades con referencia a los input anteriores (nombre, edad, genero).
5. Tambien hay dos métodos:
	* Uno de ellos es para determinar si la persona es mayor o menor de edad.
	* La otra es para retorar el mensaje "Hola, mi nombre es nombre, tengo edad años y soy mayorDeEdad."
6. De regreso a la variable del resultado, creamos otra variable donde voy a llamar new Person(nombre,edad,sexo), y este resultado lo aplico en un output para que se muestre en el HTML.
