export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        // ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
    }
    // Array<Negociacao> é o memso que Negociacao[]
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
