import { Component } from '@angular/core';

@Component({
    selector: 'app-jogo-da-velha',
    templateUrl: './jogo-da-velha.component.html',
    styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent {

    public posicoes: string[] = Array(9).fill('');
    public jogadorAtual: string = '❌';
    public vencedor: string = '';
    public fimDaPartida: boolean = false;
    public posicaoLinha: string = ""

    public tiposVitorias = [
        // Linhas
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        // Colunas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonais
        [0, 4, 8], [2, 4, 6]
    ]

    ngOnInit(){

    }

    jogadas(i: number){
        if(!this.posicoes[i] && !this.fimDaPartida){
            this.posicoes[i] = this.jogadorAtual;
            this.verificaVencedor();
            this.jogadorAtual = this.jogadorAtual == '❌' ? '⭕' : '❌';
        }
    }

    verificaVencedor(){
        debugger
        for(let vitoria of this.tiposVitorias){
            const [a, b, c] = vitoria;
            if(this.posicoes[a] && this.posicoes[a] === this.posicoes[b] && this.posicoes[a] === this.posicoes[c]){
                this.verificaPosicaoLinha(vitoria);
                this.vencedor = this.jogadorAtual;
                this.fimDaPartida = true;
                return;
            }
        }

        this.verificaPosicoesPreenchidas();
    }

    verificaPosicaoLinha(vitoria: any){
        debugger
        if(vitoria == this.tiposVitorias[0]){
            this.posicaoLinha = "horizontal-1";
        }else if(vitoria == this.tiposVitorias[1]){
            this.posicaoLinha = "horizontal-2";
        }else if(vitoria == this.tiposVitorias[2]){
            this.posicaoLinha = "horizontal-3";
        }else if(vitoria == this.tiposVitorias[3]){
            this.posicaoLinha = "vertical-1";
        }else if(vitoria == this.tiposVitorias[4]){
            this.posicaoLinha = "vertical-2";
        }else if(vitoria == this.tiposVitorias[5]){
            this.posicaoLinha = "vertical-3";
        }else if(vitoria == this.tiposVitorias[6]){
            this.posicaoLinha = "diagonal-1";
        }else if(vitoria == this.tiposVitorias[7]){
            this.posicaoLinha = "diagonal-2";
        }
    }

    verificaPosicoesPreenchidas(){
        if(this.posicoes.every(item => item !== '')){
            this.fimDaPartida = true;
            this.vencedor = '👵';
        }
    }

    reiniciar(){
        this.posicoes = Array(9).fill('');
        this.jogadorAtual = this.jogadorAtual;
        this.vencedor = '';
        this.fimDaPartida = false; 
    }
}
