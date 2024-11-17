
// script.js


document.getElementById('btn-datos-usuario').addEventListener('click', function() {

    const nombres = document.getElementById('nombres').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudades').value;

    if (!nombres || !telefono || !correo || !edad || !ciudad) {
        alert('Por favor, complete todos los campos del usuario');
        return;
    }

  
    if (isNaN(telefono)) {
        alert('El teléfono debe ser un número válido');
        return;
    }

    if (isNaN(edad)) {
        alert('La edad debe ser un número válido');
        return;
    }

    const userData = {
        nombres,
        telefono,
        correo,
        edad,
        ciudad
    };

    const cotizacionDiv = document.getElementById('cotizacion');
    cotizacionDiv.innerHTML += `
        <h2>Datos del Usuario</h2>
        <p><strong>Nombres:</strong> ${userData.nombres}</p>
        <p><strong>Teléfono:</strong> ${userData.telefono}</p>
        <p><strong>Correo:</strong> ${userData.correo}</p>
        <p><strong>Edad:</strong> ${userData.edad}</p>
        <p><strong>Ciudad:</strong> ${userData.ciudad}</p>
    `;
});