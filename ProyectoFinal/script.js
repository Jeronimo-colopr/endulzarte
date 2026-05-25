function bienvenida() {
    var nombre;

    nombre = prompt("Bienvenido a Endulzarte. ¿Cuál es tu nombre?");

    if (nombre == "" || nombre == null) {
        alert("Bienvenido a Endulzarte");
    }
    else {
        alert("Hola " + nombre + ", gracias por visitar Endulzarte");

        document.getElementById("mensajeBienvenida").innerHTML =
        "Bienvenido " + nombre + " a Endulzarte";
    }
}

function mostrarMensaje(producto) {
    alert("Nuestro producto destacado es: " + producto);
}

function validarFormulario() {

    var nombre;
    var mensaje;
    nombre = document.getElementById("nombre").value;
    mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || mensaje == "") {
        alert("Debe completar todos los campos");
        return false;
    }
    else {
        alert("Mensaje enviado correctamente");
        return true;
    }
}

function mostrarOferta() {

    document.getElementById("oferta").innerHTML =
    "Oferta especial: Ensalada de frutas + jugo natural por $7.00";

}

function cambiarColorTabla() {

    document.getElementById("precios").style.backgroundColor =
    "#ca1a92";

}