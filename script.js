document.getElementById('btnEntrar').addEventListener('click', function() {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const mensajeInput = document.getElementById('mensaje');
    const resultadoDiv = document.getElementById('resultado');

    // Obtiene el valor del mensaje
    const mensaje = mensajeInput.value;

    // Muestra el mensaje en la sección de resultados
    resultadoDiv.innerHTML = `<p>Mensaje enviado: ${mensaje}</p>`;

    // Limpia el campo de entrada
    mensajeInput.value = '';
});
