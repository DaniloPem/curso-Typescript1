import { ViewGeral } from "./view.js";
export class MensagemView extends ViewGeral {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
