// as chaves
function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: 'João',
    idade: '20',
    cidade: 'Salvador'
}

forInExemplo(meuObjeto);

// os valores
function forInExemplo2(obj) {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto2 = {
    nome: 'João',
    idade: '20',
    cidade: 'Salvador'
}

forInExemplo2(meuObjeto2);


// for ... of
function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}
const palavra = 'abacaxi';
logLetras(palavra);

function logNumeros(nums) {
    for (num of nums) {
        console.log(num);
    }
}
const nums = [30, 20, 233, 2];
logNumeros(nums);