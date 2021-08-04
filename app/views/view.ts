import { Document } from "../models/document.js";

export abstract class View<T>{
    protected elemento : HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar: boolean = false){
        this.elemento = Document.pegarElemento(seletor);
        this.escapar = escapar;
    }

    protected abstract template(model: T) : string;

    public update(model: T): void{
        let template = this.template(model);
        const exp = /<script>[\s\S]*?<\/script>/;
        if(this.escapar){            
            template = template.replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}