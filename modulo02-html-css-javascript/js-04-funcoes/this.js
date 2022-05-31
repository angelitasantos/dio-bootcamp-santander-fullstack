const pessoa = {
    firstName: 'André',
    lastName: 'Soares',
    id: 1,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    getId: function () {
        return this.id;
    }
};
console.log(pessoa.fullName());


// metodo call
const pessoa1 = {
    nome: 'Miguel',
};
const animal = {
    nome: 'Murphy',
};
function getSomething() {
    console.log(this.nome);
}
getSomething.call(pessoa1);
getSomething.call(animal);
getSomething.apply(pessoa1);
getSomething.apply(animal);


const myObj = {
    num1: 2,
    num2: 4,
};
function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5);
soma.apply(myObj, [1, 5]);


// bind
const retornaNomes = function () {
    return this.nome;
};
let bruno = retornaNomes.bind({ nome: 'Bruno' });
console.log(bruno());