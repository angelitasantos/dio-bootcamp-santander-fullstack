class ContaBancaria {

    constructor(agencia, conta, tipo) {
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada. Saldo Insuficiente!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, conta, cartaoCredito) {
        super(agencia, conta);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, conta) {
        super(agencia, conta);
        this.tipo = "poupança"
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, conta) {
        super(agencia, conta);
        this.tipo = "universitaria";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada. Valor Acima do Permitido!";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}