function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        case 4:
            return "peixe";
        default:
            return "Não tenho animal";
    }
}

console.log(getAnimal(1));
console.log(getAnimal(4));
console.log(getAnimal());