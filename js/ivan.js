const contenedorLogin = document.getElementById('contenedorInicio');
const contenedorRegister = document.getElementById('contenedorRegistro');
const botonIniciarSesion = document.getElementById('botonInicio');
const botonRegistrate = document.getElementById('botonIrRegistro');

let loginInicio
let registerRegistro

function inicioSesion() {
    contenedorRegister.style.display = 'none';

    loginInicio = `
    <h2></h2>
            <p></p>
            <form action="login">
                <label for="user">
                    Usuario:
                    <input type="text" id="user">
                </label>
                <label for="password">
                    Contraseña:
                    <input type="password" id="password" name="password">
                </label>
                <input type="submit" value="Iniciar sesion">
                <p>¿No estas registrado?</p>
                <button id='botonIrRegistro' >Registrate</button>
            </form>
    `
    contenedorLogin.innerHTML = loginInicio;
    botonRegistrate.addEventListener('click', registroUsuario);

}

function registroUsuario() {
    contenedorLogin.style.display = 'none';

    registerRegistro = `
    <h2></h2>
            <p></p>
            <form action="registro">
                <label for="name">
                    Nombres:
                    <input type="text" id="name">
                </label>
                <label for="lastname">
                    Apellidos:
                    <input type="text" id="lastname">
                </label>
                <label for="email">
                    Correo:
                    <input type="text" id="email">
                </label>
                <label for="user">
                    Usuario:
                    <input type="text" id="user">
                </label>
                <label for="password">
                    Contraseña:
                    <input type="password" id="password" name="password">
                </label>
                <input type="submit" value="Registrar">
                <p>¿Ya estas registrado?</p>
                <button id='botonInicio' >Inicia sesion</button>
            </form>
    `

    contenedorRegister.innerHTML = registerRegistro;
}

window.addEventListener('load', inicioSesion)
