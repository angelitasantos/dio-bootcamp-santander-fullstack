function sumNumbers(array) {
    return array.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const array = [1, 2, 3, 4];
console.log(sumNumbers(array));


const lista = [
    {
        name: 'sabao',
        price: 20,
    },
    {
        name: 'cereal',
        price: 15,
    },
    {
        name: 'toalha',
        price: 30,
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('Rodada: ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));