document.getElementById('albumForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const imageUrl = document.getElementById('image').value.trim();

    // Validaciones
    if (title === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El título no puede estar vacío.'
        });
        return;
    }

    if (description.length < 10) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La descripción debe tener al menos 10 caracteres.'
        });
        return;
    }

    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(imageUrl)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La URL de la imagen no es válida.'
        });
        return;
    }

    // Si pasa todas las validaciones
    Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Álbum editado correctamente.',
        confirmButtonText: 'OK'
    });
});
