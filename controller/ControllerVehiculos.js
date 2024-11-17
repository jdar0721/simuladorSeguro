let marcas = document.querySelector('#marca')

if (marcas) {
    marcas.addEventListener('change', iniciarSesion($event))
}

function iniciarSesion($event) {
    console.log($event)
}