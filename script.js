// ==============================
// MENÚ RESPONSIVO
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Cerrar menú al seleccionar una opción

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// MODO OSCURO
// ==============================

const modoOscuro = document.getElementById("modoOscuro");

modoOscuro.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        modoOscuro.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        modoOscuro.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


// ==============================
// INFORMACIÓN DE BICICLETAS
// ==============================

function mostrarInfo(bicicleta) {

    let mensaje = "";

    if (bicicleta === "Mountain Bike") {

        mensaje = "Las Mountain Bike son ideales para montaña, senderos y terrenos irregulares.";

    } else if (bicicleta === "Road Bike") {

        mensaje = "Las bicicletas de ruta están diseñadas para velocidad, distancia y rendimiento.";

    } else if (bicicleta === "Urban Bike") {

        mensaje = "Las bicicletas urbanas son perfectas para desplazamientos diarios por la ciudad.";

    } else if (bicicleta === "Ciclismo Pro") {

        mensaje = "El ciclismo profesional requiere bicicletas ligeras y componentes de alto rendimiento.";

    }

    alert(mensaje);

}


// ==============================
// VALIDACIÓN DEL FORMULARIO
// ==============================

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (nombre === "" || correo === "" || mensaje === "") {

        formMessage.textContent =
            "⚠️ Por favor completa todos los campos.";

        formMessage.style.color = "red";

        return;
    }


    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoCorreo.test(correo)) {

        formMessage.textContent =
            "⚠️ Escribe un correo electrónico válido.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "✓ ¡Mensaje enviado correctamente! Gracias por contactar a VeloSport.";

    formMessage.style.color = "green";


    formulario.reset();

});