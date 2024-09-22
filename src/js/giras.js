
let nombre = "";
let edad;

// Mostrar un mensaje genérico antes de pedir el nombre
alert("¡Bienvenido! A continuación, te pediremos algunos datos.");

// Bucle while para asegurar que el nombre tenga al menos 3 letras
while (nombre.length < 3) {
    nombre = prompt("¿Cómo te llamas?");

    // Si el nombre no se completa
    if (!nombre) {
        alert("Debes completar tu nombre.");
    }
    // Si el nombre tiene menos de 3 letras
    else if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
    }
}

 // Bucle while para asegurar que se ingrese una edad válida (un número mayor a 0)
while (isNaN(edad) || edad <= 0) {
    edad = prompt("¿Cuántos años tienes?");

    // Si la entrada no es un número o es menor o igual a 0
    if (isNaN(edad) || edad <= 0) {
            alert("Por favor, introduce una edad válida.");
    }
}

// Crear mensaje personalizado con el ícono de tickets
const mensaje = `Hola ${nombre} <i class="fa-solid fa-ticket" style="color: #ffffff;"></i> de ${edad} años, ¿te interesaría adquirir tickets?`;

// Mostrar el mensaje en el div con id="userMessage"
document.getElementById('userMessage').innerHTML = mensaje;