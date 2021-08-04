export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        console.log("teste: " + negociacao);
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
