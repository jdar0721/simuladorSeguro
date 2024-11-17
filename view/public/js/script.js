import { buscarUsuario } from "../../../controller/ControllerUsuarios.js"
let btnIniciar = document.querySelector('#btnIniciar')
if (btnIniciar) {
    btnIniciar.addEventListener('click', iniciarSesion)
    function iniciarSesion() {
        if (buscarUsuario()) {
            window.location.href = '/view/pages/home.html'
        } else {
            console.log('Error de credenciales')
        }
    }
}