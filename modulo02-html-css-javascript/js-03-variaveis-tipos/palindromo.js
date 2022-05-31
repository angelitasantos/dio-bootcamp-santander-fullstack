// solução 1
function verificarPalindromo1(string) {
    // verifica se a variavel vem vazia, null ou undefined
    if (!string) return "string inexistente";

    /* split separa a string em letras
    reverse inverte o sentido da string
    join junta novamente as letras formando a string invertida */
    return string.split("").reverse().join("") === string;
}

let string1 = 'gato';

console.log(verificarPalindromo1(string1));


// solução 2
function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    // comparar o primeiro caracter com o último
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let string2 = 'abba';

console.log(verificarPalindromo2(string2));