import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (!!form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener("click", () => controller.importaDados());
}
