let root = document.querySelector(".root");
let agregar = document.querySelector(".agregar");

// Event listener para abrir la ventana modal de registro
agregar.addEventListener("click", modal);

function modal() {
    let registro = document.createElement("div");
    registro.classList.add("ventana");
    registro.innerHTML = `
        <div class="vtn_registro">
            <h1>Registro</h1>
            <h2>Nombre: </h2>
            <input type="text" class="nombre">
            <h2>Correo electrónico:</h2>
            <input type="text" class="correo">
            <div class="btn1">Enviar</div>
        </div>
    `;
    root.appendChild(registro);

    let btn1 = document.querySelector(".btn1");
    btn1.addEventListener("click", () => {
        let nombre = document.querySelector(".nombre").value;
        let correo = document.querySelector(".correo").value;

        agregarUsuario(nombre, correo);

        root.removeChild(registro);
    });
}

function agregarUsuario(nombre, correo) {
    let usuarios = document.querySelector(".usuarios");

    let usuario = document.createElement("div");
    usuario.classList.add("main");
    usuario.innerHTML = `
       
    <div class="us">
        <div class="img"></div>
        <div class="info_us">
            <h1>${nombre}</h1>
            <span>${correo}</span>
        </div>
    </div>
    <div class="tareas">
        <h1>3</h1>
        <div class="mas">+</div>
        <div class="asignaciones">
            <div class="asig">1 asignacion</div>
            <div class="asig">2 asignacion</div>
            <div class="asig">3 asignacion</div>
        </div>
    </div>
    `;

    usuarios.appendChild(usuario);
}
