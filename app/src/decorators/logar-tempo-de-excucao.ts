export function logarTempoDeExecucao() {
  return function(
    target: any, 
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value= function(...args: any[]) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execucao: ${(t1-t2)/1000} segundos`);
      retorno;
    };
    return descriptor;
  }
}

//se o decorator está encima de um método estático de uma classe, a target pode
//ser uma funcao construtora, senao ela vai ser o prototype