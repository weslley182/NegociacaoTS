export class Document {
    static pegarElemento(elemento) {
        const dado = document.querySelector(elemento);
        if (dado) {
            return dado;
        }
        else {
            throw Error(`P elemento ${elemento} não existe.`);
        }
    }
}
