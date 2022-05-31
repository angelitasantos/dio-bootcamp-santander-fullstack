// com this
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];
console.log('this -> maça', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));


// sem this
function mapSemThis(array) {
    return array.map(function (item) {
        return item * 2;
    });
}

const numeros = [2, 4, 6, 8, 10];
console.log(mapSemThis(numeros));
