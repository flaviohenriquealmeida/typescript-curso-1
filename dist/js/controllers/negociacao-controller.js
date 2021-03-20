import { Negociacao } from '../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = new Negociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
    }
}
