export class ViewGeral {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor); //nao funciona no primeiro parámetro ou o constructor só pode ter parámtros opcionais
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
