document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#subscribe form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por suscribirte! Pronto recibirás tu descuento.');
    });
});
