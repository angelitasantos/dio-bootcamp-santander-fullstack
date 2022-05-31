// função anônima
const soma = function (a, b) {
    return a + b;
}

console.log(soma(1, 2));
console.log(soma(5, 4));


// função autoinvocável
(
    function () {
        let name = "Digital Innovation One";
        return name;
    }
)();

const soma1 = (function (a, b) {
    return a + b;
})(2, 2);

console.log(soma1);


// callbacks
const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
}

const sum = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const resultSum = calc(sum, 5, 2);
const resultSub = calc(sub, 5, 3);

console.log(resultSum);
console.log(resultSub);
