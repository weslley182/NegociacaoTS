import { DiaDaSemana } from "../enums/diasDaSemana.js";
import { Document } from "../models/document.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensageView = new MensagemView('#mensagemView');
        this.inputData = Document.pegarElemento('#data');
        this.inputQuantidade = Document.pegarElemento('#quantidade');
        this.inputValor = Document.pegarElemento('#valor');
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensageView
                .update('Somente negociações em dias úteis.');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensageView.update('Negociação adicionada com sucesso');
        ;
    }
    ehDiaUtil(data) {
        return (data.getDay() > DiaDaSemana.DOMINGO
            && data.getDay() < DiaDaSemana.SABADO);
    }
}
