/* =========================================
   CONTACTO - EMAILJS
   ========================================= */

// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // CONFIGURACIÓN EMAILJS
    // =========================================

    emailjs.init({
        publicKey: "8hYQ2lidvm6cdPUYq"
    });


    // =========================================
    // ELEMENTOS DEL FORMULARIO
    // =========================================

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitButton = document.getElementById("submit-button");


    // Verificar que el formulario exista
    if (!form) {
        console.error("No se encontró el formulario de contacto.");
        return;
    }


    // =========================================
    // ENVÍO DEL FORMULARIO
    // =========================================

    form.addEventListener("submit", function (event) {

        // Evita que el navegador abra el correo
        event.preventDefault();


        // Estado inicial
        status.textContent = "Enviando mensaje...";
        status.className = "form-status";


        // Desactivar botón para evitar múltiples envíos
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";


        // =========================================
        // ENVÍO MEDIANTE EMAILJS
        // =========================================

        emailjs.sendForm(
            "service_o9zuo3g",
            "template_q309t5r",
            form
        )

        .then(function () {

            // =========================================
            // ENVÍO EXITOSO
            // =========================================

            status.textContent =
                "¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.";

            status.className = "form-status success";


            // Limpiar formulario
            form.reset();


            // Restaurar botón
            submitButton.disabled = false;
            submitButton.textContent = "Enviar mensaje →";

        })

        .catch(function (error) {

            // =========================================
            // ERROR
            // =========================================

            console.error("Error al enviar el mensaje:", error);

            status.textContent =
                "No se pudo enviar el mensaje. Por favor, inténtalo nuevamente.";

            status.className = "form-status error";


            // Restaurar botón
            submitButton.disabled = false;
            submitButton.textContent = "Enviar mensaje →";

        });

    });

});