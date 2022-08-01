export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function(
    target: any, 
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value= function(...args: any[]) {
      let divisor = 1;
      let unidade = 'milisegundos';
      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execucao: ${(t1-t2)/divisor} ${unidade}`);
      retorno;
    };
    return descriptor;
  }
}

//se o decorator está encima de um método estático de uma classe, a target pode
//ser uma funcao construtora, senao ela vai ser o prototype