<script>
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var ciudad = document.getElementById("ciudad").value;
    var fecha = document.getElementById("fecha").value;
    var motivo = document.querySelector('input[name="motivo"]:checked');
    var preferencias = document.querySelectorAll('input[name="preferencias"]:checked');
    var comentarios = document.getElementById("comentarios").value;

    if (nombre === "" || email === "" || edad === "" || telefono === "" || ciudad === "" || fecha === "" || motivo === null) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }
    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Email: " + email + "\n";
    mensaje += "Edad: " + edad + "\n";
    mensaje += "Teléfono: " + telefono + "\n";
    mensaje += "País: " + ciudad + "\n";
    mensaje += "Fecha de Viaje: " + fecha + "\n";
    mensaje += "Motivo de la Consulta: " + motivo.value + "\n";
    mensaje += "Preferencias: ";
    for (var i = 0; i < preferencias.length; i++) {
        mensaje += preferencias[i].value + " "
    }
    mensaje += "\nComentarios: " + comentarios;

    // Enviar el formulario por correo electrónico
    var correoDestino = "tu_correo@example.com"; 
    var asunto = "Consulta de Viaje";
    window.location = "mailto:" + correoDestino + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(mensaje);
    return true;
}}
</script>