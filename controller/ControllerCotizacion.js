
function calcularPrecioSeguro(vehiculo, coberturas) {
    let precioBase = 10000000; // 

    const anosDiferencia = new Date().getFullYear() - parseInt(vehiculo.año, 10);
    precioBase += anosDiferencia * 20; 

    if (coberturas.includes('Responsabilidad civil')) precioBase += 500000;
    if (coberturas.includes('Todo riesgo')) precioBase += 1000000;
    if (coberturas.includes('Tercero completo')) precioBase += 3000000;


    const variacion = Math.random() * 50000 - 25000; 
    return Math.round(precioBase + variacion);
}

document.getElementById('btn-datos-vehiculo').addEventListener('click', function() {

    const placa = document.getElementById('placa').value;
    const selectMarca = document.getElementById('marca');
    const marcaSeleccionada = selectMarca.value;
    const selectModelo = document.getElementById('modelo');
    const modeloSeleccionado = selectModelo.value;
    const selectAno = document.getElementById('año');
    const anoSeleccionado = selectAno.value;

    if (!placa || !marcaSeleccionada || !modeloSeleccionado || !anoSeleccionado) {
        alert('Por favor, complete todos los campos del vehículo');
        return;
    }

    const vehicleData = {
        placa,
        marca: marcaSeleccionada,
        modelo: modeloSeleccionado,
        año: anoSeleccionado
    };


    const coberturaCivil = document.getElementById('flexCheckCivil').checked;
    const coberturaRiesgo = document.getElementById('flexCheckRiesgo').checked;
    const coberturaTercero = document.getElementById('flexCheckTercero').checked;

    let coberturas = [];
    if (coberturaCivil) coberturas.push('Responsabilidad civil');
    if (coberturaRiesgo) coberturas.push('Todo riesgo');
    if (coberturaTercero) coberturas.push('Tercero completo');

    const precioSeguro = calcularPrecioSeguro(vehicleData, coberturas);

    const cotizacionDiv = document.getElementById('cotizacion');
    cotizacionDiv.innerHTML += `
        <h2>Datos del Vehículo</h2>
        <p><strong>Placa:</strong> ${vehicleData.placa}</p>
        <p><strong>Marca:</strong> ${vehicleData.marca}</p>
        <p><strong>Modelo:</strong> ${vehicleData.modelo}</p>
        <p><strong>Año:</strong> ${vehicleData.año}</p>

        <h3>Coberturas Seleccionadas</h3>
        <ul>
            ${coberturas.map(cobertura => `<li>${cobertura}</li>`).join('')}
        </ul>

        <h3>Precio del Seguro</h3>
        <p><strong>$${precioSeguro.toFixed(2)}</strong></p>
    `;
});
