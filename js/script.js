//Crear el registro Usuario
function crearUsuario(nombre, apellido, tipo_doc, dni, fecha_nacimiento, correo, numCel, pais, ciudad, politica) {
    
const usuarioCreado = {
    id : Date.now(),
    nombreCompleto : `${nombre} ${apellido}`,
    documento : {
        tipo: tipo_doc,
        numero: dni
    },
    fecha_nacimiento : fecha_nacimiento,
    correo : correo,
    numCel : numCel,
    ubicacion : {
        pais : pais,
        ciudad : ciudad
    },
    politica : politica
}
return usuarioCreado;
}

const formulario = document.querySelector('form');

//Captura de Informacion
formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tipo_doc = document.getElementById('tipo-documento').value;
    const dni = document.getElementById('numero-documento').value;
    const fecha_nacimiento = document.getElementById('fecha-nacimiento').value;
    const correo = document.getElementById('email').value;
    const numeroCel = document.getElementById('celular').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const politica = document.getElementById('politica').value;

    const usuarioGuardado = crearUsuario(nombre, apellido, tipo_doc, dni, fecha_nacimiento, correo, numeroCel, pais, ciudad, politica);

    console.log("Registro Creado");
    console.log(usuarioGuardado);

//Guardado
localStorage.setItem(usuarioGuardado.id, JSON.stringify(usuarioGuardado));

})