const formulario = document.getElementById('formulario');
const estaturainput = document.getElementById('estatura');
const pesoinput = document.getElementById('peso');

formulario.onsubmit = (e) => {
    e.preventDefault();
    const peso =parseFloat(pesoinput.value);
    const estatura = parseFloat(estaturainput.value)/100;
    const resultadoimc = peso / (estatura*estatura);
    alert(`El IMC es: ${resultadoimc.toFixed(2)}`);
};
