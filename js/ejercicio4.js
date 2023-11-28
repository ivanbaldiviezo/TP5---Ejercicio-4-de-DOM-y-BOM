function actualizarReloj() {
    const now = new Date();

    // Obtener elementos del DOM
    const fecha = document.getElementById('fecha');
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const ampm = document.getElementById('ampm');
    const segundos = document.getElementById('segundos');

    // Configurar opciones de formato
    const opcionesFecha = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const opcionesHora = {
        hour: 'numeric',
        hour24: true
    };

    // Actualizar
    fecha.textContent = now.toLocaleDateString('es-ES', opcionesFecha);
    horas.textContent = now.toLocaleTimeString('es-ES', opcionesHora);
    horas.textContent = String(now.getHours()).padStart(2, '0');
    minutos.textContent = String(now.getMinutes()).padStart(2, '0');
    segundos.textContent = String(now.getSeconds()).padStart(2, '0');
    ampm.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llama a la función al cargar la página
actualizarReloj();