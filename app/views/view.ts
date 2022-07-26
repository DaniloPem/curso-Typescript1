export abstract class ViewGeral<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor (seletor: string, escapar?: boolean) { //o simbolo "?" indica que o parámetro é opcional
    this.elemento = document.querySelector(seletor);  //nao funciona no primeiro parámetro ou o constructor só pode ter parámtros opcionais
    if(escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template (model: T): string;

  public update (model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.elemento.innerHTML = template;
  }
}