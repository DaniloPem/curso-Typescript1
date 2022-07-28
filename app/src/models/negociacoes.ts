import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  // Array<Negociacao> é o memso que Negociacao[]

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  // ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
}