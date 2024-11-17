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
 
    const cotizacionDiv = document.getElementById('cotizacion');
    cotizacionDiv.innerHTML += `
      <h2>Datos del Vehículo</h2>
      <p><strong>Placa:</strong> ${vehicleData.placa}</p>
      <p><strong>Marca:</strong> ${vehicleData.marca}</p>
      <p><strong>Modelo:</strong> ${vehicleData.modelo}</p>
      <p><strong>Año:</strong> ${vehicleData.año}</p>
    `;
  
    const coberturaCivil = document.getElementById('flexCheckCivil').checked;
    const coberturaRiesgo = document.getElementById('flexCheckRiesgo').checked;
    const coberturaTercero = document.getElementById('flexCheckTercero').checked;
  
    let coberturas = [];
  
    if (coberturaCivil) coberturas.push('Responsabilidad civil');
    if (coberturaRiesgo) coberturas.push('Todo riesgo');
    if (coberturaTercero) coberturas.push('Tercero completo');
  

    cotizacionDiv.innerHTML += `
      <h3>Coberturas Seleccionadas</h3>
      <ul>
        ${coberturas.map(cobertura => `<li>${cobertura}</li>`).join('')}
      </ul>
    `;
  });
  

  function actualizarModelos(marcaSeleccionada) {
    const selectModelo = document.getElementById('modelo');
    selectModelo.innerHTML = '';  
  
    const modelos = {
      'renault': ['Duster', 'Logan', 'Kwid'],
      'chevrolet': ['Cruze', 'Onix', 'Tracker'],
      'nissan': ['Sentra', 'Versa', 'Altima']
    };
  
    const modelosDisponibles = modelos[marcaSeleccionada] || [];
  
    modelosDisponibles.forEach(modelo => {
      const option = document.createElement('option');
      option.value = modelo;
      option.text = modelo;
      selectModelo.appendChild(option);
    });
  }

  const selectMarca = document.getElementById('marca');
  selectMarca.addEventListener('change', () => {
    const marcaSeleccionada = selectMarca.value;
    actualizarModelos(marcaSeleccionada);
  });