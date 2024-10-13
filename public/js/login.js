// Función de validación
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario hasta que la validación sea correcta
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let mensajeError = "";

    // Validar que el usuario no esté vacío y cumpla con un formato específico
    if (usuario.trim() === "") {
        mensajeError += "El campo de Username es obligatorio.<br>";
    } else if (!/^[a-zA-Z0-9]+$/.test(usuario)) {
        mensajeError += "El Username solo debe contener letras y números.<br>";
    }

    // Validar que el password tenga al menos 6 caracteres y al menos un número
    if (password.length < 6) {
        mensajeError += "El Password debe tener al menos 6 caracteres.<br>";
    } else if (!/\d/.test(password)) {
        mensajeError += "El Password debe contener al menos un número.<br>";
    }

    // Si hay errores, mostrar alerta de SweetAlert
    if (mensajeError) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: mensajeError,
        });
    } else {
        // Si todo está correcto, enviar el formulario y mostrar una alerta de éxito
        Swal.fire({
            icon: 'success',
            title: 'Formulario válido',
            text: 'Iniciando sesión...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            event.target.submit(); // Envía el formulario si está validado
        });
    }
}


