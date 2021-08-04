export class Document{
    public static pegarElemento(elemento: string): HTMLInputElement{
        const dado = document.querySelector(elemento);
        if(dado){
            return dado as HTMLInputElement;
        }else{
            throw Error(`P elemento ${elemento} não existe.`);
        }
        
    }
}