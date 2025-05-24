const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.onsubmit = (e) => {
    e.preventDefault();

    // Asiganamos el valor a cada una de las variables
    const nombre = formulario["nombre"].value.trim();
    const apellido = formulario["apellido"].value.trim();
    const edad = Number(formulario["edad"].value);
    const altura = Number(formulario["altura"].value);
    const email = formulario["email"].value.trim();

    let errores = [];


    // El nombre no puede estar vacio y volvemos a validar que no supere los 50 caracteres
    if (nombre === "" || nombre.length > 50) {
    errores.push("El nombre no puede estar vacío ni superar los 50 caracteres.");
    }

    // El apellido no puede estar vacio y volvemos a validar que no supere los 50 caracteres
    if (apellido === "" || apellido.length > 50) {
    errores.push("El apellido no puede estar vacío ni superar los 50 caracteres.");
    }

    // La edad no puede ser negativa y debe ser mayor de 18 años
    if (isNaN(edad) || edad < 0) {
    errores.push("La edad no puede ser negativa.");
    } else if (edad < 18) {
    errores.push("Debe ser mayor de edad.");
    }

    // La altura no puede ser negativa y no debe superar los 230cm
    if (isNaN(altura) || altura < 0) {
    errores.push("La altura no puede ser negativa.");
    } else if (altura > 230) {
    errores.push("La altura no puede superar los 230 cm.");
    }

    // El correo debe incluir arroba y no puede estar vacio
    if (email === "" || !email.includes("@")) {
    errores.push("El correo debe contener '@' y no puede estar vacío.");
    }

    // Control de errores
    if (errores.length > 0) {
    mensaje.style.color = "red";
    mensaje.textContent = errores.join(" ");
    } else {
    mensaje.style.color = "green";
    mensaje.textContent = "Todos los datos son correctos.";
    }
};
