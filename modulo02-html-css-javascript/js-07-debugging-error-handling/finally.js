function verificarPalindromo2(string) {
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');

}

function tryCatchExemplo(string) {
    try {
        return verificarPalindromo2(string)
    }
    catch (error) {
        throw (error);
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');