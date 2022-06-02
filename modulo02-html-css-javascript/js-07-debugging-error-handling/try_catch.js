function verificarPalindromo2(string) {
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');

}

function tryCatchExemplo(string) {
    try {
        verificarPalindromo2(string)
    }
    catch (error) {
        console.log(error);
    }
}

tryCatchExemplo('');
