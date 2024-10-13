swal({
    title: "Bienvenido a la Gira de Kiss",
    text: "Por favor, ingresa tu nombre para continuar.",
    icon: "info",
    button: "OK",
}).then(() => {

    // Inicializar variable para el nombre
    let nombre = "";

    // Validar que el nombre tenga al menos 3 letras
    while (nombre.length < 3) {
        nombre = prompt("¿Cuál es tu nombre? (Debe tener al menos 3 letras)");

        if (nombre.length < 3) {
            alert("Tu nombre debe tener al menos 3 letras. Inténtalo de nuevo.");
        }
    }

    // Inicializar variable para la edad
    let edad = "";

    // Validar que solo se ingresen números en la edad
    while (!/^\d+$/.test(edad)) {
        edad = prompt("¿Cuál es tu edad? (Solo números)");

        if (!/^\d+$/.test(edad)) {
            alert("Por favor, ingresa solo números para la edad.");
        }
    }

    // Verificar si el usuario es menor de edad (menos de 18 años)
    if (parseInt(edad) < 18) {
        swal({
            title: "Advertencia",
            text: "No puedes comprar tickets si eres menor de edad.",
            icon: "warning",
            button: "Entendido",
        });

        // Deshabilitar botones y cambiar el estilo visual
        disableTicketButtons();

        // Mostrar mensaje en el HTML
        const warningMessage = document.getElementById("warningMessage");
        warningMessage.innerHTML = `Lo siento <strong>${nombre}</strong>, no puedes comprar entradas siendo menor de edad.`;
        warningMessage.style.color = "red"; // Cambia el color del texto a rojo
    } else {
        const iconoTicket = '<i class="fas fa-ticket-alt"></i>';
        swal({
            title: `Hola ${nombre} de ${edad} años`,
            text: "¿Te interesaría adquirir tickets? 🎟️",
            icon: "success",
            button: "¡Claro!",
        });

        // Mostrar el nombre y el ícono de tickets
        const userMessage = document.getElementById("userMessage");
        userMessage.innerHTML = `${nombre} ${iconoTicket} estas son las funciones actuales`;

        // Habilitar los botones de tickets
        enableTicketButtons();
    }
});

// Crear objeto con los tickets disponibles por cada ciudad
let tickets = {
    "Ciudad de México": 100,
    "São Paulo": 50,
    "Nueva York": 35,
    "Berlín": 0,
    "Tokio": 0,
    "Sídney": 120,
    "Moscú": 5,
    "Toronto": 0
};

// Función para deshabilitar los botones si el usuario es menor de edad
function disableTicketButtons() {
    const botonesTickets = document.querySelectorAll(".ticket-link");

    botonesTickets.forEach(boton => {
        boton.disabled = true;
        boton.style.backgroundColor = "#6B7280"; // Cambiar a un gris claro
        boton.style.cursor = "not-allowed"; // Cambiar el cursor a "no permitido"
    });
}

// Función para verificar y modificar la cantidad de tickets tras una compra
function getTickets(lugar) {
    if (tickets[lugar] > 0) {
        // Reducir la cantidad de tickets disponibles en 1
        tickets[lugar]--;

        // Informar al usuario que la compra fue exitosa
        swal({
            title: "¡Compra Exitosa!",
            text: `Has comprado tu ticket para el concierto en ${lugar}. Quedan ${tickets[lugar]} tickets disponibles.`,
            icon: "success",
            button: "OK",
        });

        // Verificar si los tickets se han agotado tras la compra
        disableSoldOutButtons();
    } else {
        // Informar que no hay más tickets disponibles
        swal({
            title: "Lo sentimos",
            text: `No hay más tickets disponibles para el concierto en ${lugar}.`,
            icon: "error",
            button: "Cerrar",
        });
    }
}

// Función para deshabilitar botones de tickets que estén agotados
function disableSoldOutButtons() {
    const botonesTickets = document.querySelectorAll(".ticket-link");

    botonesTickets.forEach(boton => {
        const ciudad = boton.parentElement.querySelector('p').textContent.split(': ')[1];

        // Si no hay más tickets, deshabilitar el botón y cambiar el texto
        if (tickets[ciudad] === 0) {
            boton.disabled = true;
            boton.textContent = "SOLD OUT";
            boton.style.backgroundColor = "#6B7280"; // Cambiar a un gris claro
            boton.style.cursor = "not-allowed"; // Cambiar el cursor a "no permitido"
        }
    });
}

// Función para habilitar los botones de tickets solo después de ingresar los datos del usuario
function enableTicketButtons() {
    const botonesTickets = document.querySelectorAll(".ticket-link");

    botonesTickets.forEach(boton => {
        const ciudad = boton.parentElement.querySelector('p').textContent.split(': ')[1];

        boton.addEventListener("click", function () {
            getTickets(ciudad); // Pasar solo el nombre de la ciudad
        });
    });

    // Deshabilitar los botones de los lugares con tickets agotados
    disableSoldOutButtons();
}



