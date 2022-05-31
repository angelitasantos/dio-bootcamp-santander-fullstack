// if/else

function numeroPositivo(num) {
    let resultado;
    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));


// mesma função com const
function numeroPositivoConst(num) {
    let resultado;
    const ehNegativo = num < 0;
    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

console.log(numeroPositivoConst(2));
console.log(numeroPositivoConst(-9));


// mesma função com codigo enxuto
function numeroPositivoEnx(num) {
    const ehNegativo = num < 0;
    if (ehNegativo) {
        return false;
    }
    return true;
}

console.log(numeroPositivoEnx(2));
console.log(numeroPositivoEnx(-9));



// if / else if
function numeroPositivo1(num) {
    const ehNegativo = num < 0;
    const maiorQue10 = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo";
    } else if (!ehNegativo && maiorQue10) {
        return "Esse número é positivo é maior que 10.";
    }
    return "Esse número é positivo.";
}

console.log(numeroPositivo1(12));
console.log(numeroPositivo1(2));
console.log(numeroPositivo1(-9));