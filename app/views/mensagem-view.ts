import { ViewGeral } from "./view.js";

export class MensagemView extends ViewGeral <string> {

  template (model: string): string {
    return `<p class="alert alert-info">${model}</p>`
  }

}