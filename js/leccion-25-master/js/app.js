window.addEventListener("load", function () {
     var boton = document.getElementById("btn-1");
     var contador = 1;
     boton.addEventListener("click", function () {
        if (contador == 1) {
            document.getElementsByClassName("circle")[0].style.border = "3px solid black";
            document.getElementById("color").value = "rojo";
            document.getElementsByClassName("circle")[1].style.border = 'transparent';
            document.getElementsByClassName("circle")[2].style.border = 'transparent';
        };
        if (contador == 2) {
            document.getElementsByClassName("circle")[1].style.border = "3px solid white";
            document.getElementById("color").value = "azul";
            document.getElementsByClassName("circle")[0].style.border = 'transparent';
            document.getElementsByClassName("circle")[2].style.border = 'transparent';
        };
        if (contador == 3) {
            document.getElementsByClassName("circle")[2].style.border = "3px solid yellow";
            document.getElementById("color").value = "verde";
            document.getElementsByClassName("circle")[0].style.border = 'transparent';
            document.getElementsByClassName("circle")[1].style.border = 'transparent';
            contador = 0;
        };
        contador++;
     }); 
    var botonDos = document.getElementById("btn-2");
        botonDos.addEventListener("click", function() {
        var IngresarColor = document.getElementById("color").value;
        if (IngresarColor == "rojo"){
            document.getElementsByClassName("circle")[0].style.border = "3px solid yellow";
            document.getElementsByClassName("circle")[1].style.border = 'transparent';
            document.getElementsByClassName("circle")[2].style.border = 'transparent';
        };
        if (IngresarColor == "azul"){
            document.getElementsByClassName("circle")[0].style.border = 'transparent';
            document.getElementsByClassName("circle")[1].style.border = "3px solid yellow";
            document.getElementsByClassName("circle")[2].style.border = 'transparent';
        };
        if (IngresarColor == "verde"){
            document.getElementsByClassName("circle")[0].style.border = 'transparent';
            document.getElementsByClassName("circle")[1].style.border = 'transparent';
            document.getElementsByClassName("circle")[2].style.border = "3px solid yellow";
        };
     });
});