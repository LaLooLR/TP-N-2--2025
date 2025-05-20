const ladoA = $("ladoA");
const ladoB = $("ladoB");
const ladoC = $("ladoC");

area.onclick=()=>{
    const diferencia = ladoA.value - ladoC.value;
    const triangulo = (diferencia*ladoB.value)/2;
    const rectangulo = ladoC.value * ladoB.value;

    resultadoarea = +triangulo + +rectangulo;
    alert(`el resultado es: ${resultadoarea}m`);
};

function $(elemento){
    return document.getElementById(elemento);
};
