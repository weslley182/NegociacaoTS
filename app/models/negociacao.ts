import { DateUtils } from "./dateUtils.js";

export class Negociacao{    

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number)
    {}

    get data(): Date{
        //programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor
    }

    get volume(): Number{
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, 
        qtdString: string, 
        vlrString: string): Negociacao{        
        const date = DateUtils.converteDataStr(dataString)
        const quantidade = parseInt(qtdString);
        const valor = parseFloat(vlrString);
        return new Negociacao(date, quantidade, valor);
    }    
}