///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - Geolocation II
 * Origin: Capitulo46.html ==> Tratamiento de errores
 */

// "use strict";


//1. Definición de Objetos y Variables
var miUbicacion;
var dameUbicacion;



//1.1 Extracción de elementos desde HTML
miUbicacion = document.getElementById("ubicacion");
dameUbicacion = document.getElementById("dame-ubicacion");

//2. Definición de Funciones
function mostrarPosicion(posicion) {
    var latitud;
    var longitud;
    var exactitud;
    var ubicacion;

    latitud = "Latitud: " + posicion.coords.latitude + "<br />";
    longitud = "Longitud: " + posicion.coords.longitude + "<br />";
    exactitud = "Exactitud: " + posicion.coords.accuracy + "<br />";
    ubicacion = latitud + longitud + exactitud;

    miUbicacion.innerHTML = ubicacion;
}

function gestionErrores(error) {
//    alert("Ha habido un error: " + "error " + error.code + " " + error.message);

//    if (error.message == "User denied Geolocation") {
//        alert("Por favor, activa la ubicación en tu navegador");
//    }

    if (error.code == 1) {
        alert("Por favor, activa la ubicación en tu navegador");
    }
}


function obtenerUbicacion() {

//definimos el objeto parametros como tercer argumento del método getCurrentPosition.
    var paramentros;

    parametros = {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000}

// Llamamos al método getCurrentPosition perteneciente al API geolocation que
// pertenece al objetoJS navigator y guarda como evento el objeto position que
// devuelve

//Usando getCurrentPosition(), el significado de maximumAge:60000 es que si tiene almacenada una posición en la cache hace menos de un segundo, que la use en vez de buscarla de nuevo.
    navigator.geolocation.getCurrentPosition(mostrarPosicion, gestionErrores, parametros);

//Usando watchPosition(), el significado de maximumAge:60000 es que actualice la posición cada 60 segundos.
//    navigator.geolocation.watchPosition(mostrarPosicion, gestionErrores, parametros);
}

function comenzar() {
    dameUbicacion.addEventListener("click", obtenerUbicacion, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
