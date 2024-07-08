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
            <h1 class="contador">0</h1>
            <div class="mas">+</div>
            <div class="asignaciones"></div>
        </div>
    `;

    usuarios.appendChild(usuario);

    // Añadir el evento para el botón "más"
    let mas = usuario.querySelector(".mas");
    mas.addEventListener("click", () => mostrarModalAsignacion(usuario));
}

function mostrarModalAsignacion(usuario) {
    let modalAsignacion = document.createElement("div");
    modalAsignacion.classList.add("ventana");
    modalAsignacion.innerHTML = `
        <div class="vtn_asignacion">
            <h1>Agregar Asignación</h1>
            <h2>Descripción: </h2>
            <input type="text" class="descripcion">
            <div class="btn1">Agregar</div>
        </div>
    `;
    root.appendChild(modalAsignacion);

    let btn1 = modalAsignacion.querySelector(".btn1");
    btn1.addEventListener("click", () => {
        let descripcion = modalAsignacion.querySelector(".descripcion").value;
        agregarAsignacion(usuario, descripcion);

        root.removeChild(modalAsignacion);
    });
}

function agregarAsignacion(usuario, descripcion) {
    let asignaciones = usuario.querySelector(".asignaciones");

    let nuevaAsignacion = document.createElement("div");
    nuevaAsignacion.classList.add("asig");
    nuevaAsignacion.textContent = descripcion;

    asignaciones.appendChild(nuevaAsignacion);

    // Actualizar el contador
    let contador = usuario.querySelector(".contador");
    contador.textContent = asignaciones.children.length;
}
