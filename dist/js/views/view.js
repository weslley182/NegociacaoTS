import { Document } from "../models/document.js";
export class View {
    constructor(seletor, escapar = false) {
        this.escapar = false;
        this.elemento = Document.pegarElemento(seletor);
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        const exp = /<script>[\s\S]*?<\/script>/;
        if (this.escapar) {
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}
