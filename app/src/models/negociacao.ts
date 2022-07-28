// export class Negociacao {
//   private _data: Date;
//   private _quantidade: number;
//   private _valor: number;

//   constructor(data: Date, quantidade: number, valor: number) {
//     this._data = data;
//     this._quantidade = quantidade;
//     this._valor = valor;
//   }

//   get data(): Date {
//     return this._data;
//   }

//   get quantidade(): number {
//     return this._quantidade;
//   }

//   get valor(): number {
//     return this._valor;
//   }

//   get volume(): number {
//     return this._quantidade * this._valor;
//   }

  export class Negociacao {

    constructor(
      private _data: Date,
      public readonly quantidade: number,
      public readonly valor: number
    ) {}

    get volume(): number {
      return this.quantidade * this.valor;
    }

    get data(): Date {
      const data = new Date(this._data.getTime());
      return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
      const exp = /-/g;
      const date = new Date(dataString.replace(exp, ","));
      const quantidade = parseInt(quantidadeString);
      const valor = parseFloat(valorString);
      return new Negociacao(date, quantidade, valor);
      }
}
