const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const mySet = new Set(array);
    // utilizar o spread para retornar um array e não um set
    return [...mySet];
}

console.log(valoresUnicos(myArray));