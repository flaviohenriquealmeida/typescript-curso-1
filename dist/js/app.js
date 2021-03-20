import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date());
console.log(negociacao.volume);
