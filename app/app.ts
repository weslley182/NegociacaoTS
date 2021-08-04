import { negociacaoController } from "./controllers/negociacaoController.js";
import { Document } from "./models/document.js";

const controller = new negociacaoController();
const form = Document.pegarElemento('.form');
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
});