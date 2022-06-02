function verificarPalindromo1(string) {
    if (!string) return "String Inválida";

    return string === string.split('').reverse().join('');

}

let string1 = '';

console.log(verificarPalindromo1(string1));



function verificarPalindromo2(string) {
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');

}

let string2 = '';

console.log(verificarPalindromo2(string2));