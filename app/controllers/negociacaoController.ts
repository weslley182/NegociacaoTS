import { DiaDaSemana } from "../enums/diasDaSemana.js";
import { Document } from "../models/document.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class negociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensageView = new MensagemView('#mensagemView');

    constructor(){
        this.inputData = Document.pegarElemento('#data');
        this.inputQuantidade = Document.pegarElemento('#quantidade');
        this.inputValor = Document.pegarElemento('#valor');        
    }

    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        ); 

        if(!this.ehDiaUtil(negociacao.data)){
            this.mensageView
                .update('Somente negociações em dias úteis.');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();        
        this.limparFormulario();
    }    

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensageView.update('Negociação adicionada com sucesso');;
    }

    private ehDiaUtil(data: Date): boolean{
        return (data.getDay() > DiaDaSemana.DOMINGO 
            && data.getDay() < DiaDaSemana.SABADO);
    }
}