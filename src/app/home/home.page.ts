import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public pesquisa: String = "";
    public resultado: String = "";
    public titulo: String = "Meu primeiro App";
    public imagemRandomica: String = "https://img.redbull.com/images/c_crop,w_3495,h_2329,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2014/08/19/1331672645623_4/uma-geleira-gigantesca";
    public imagemLocal: String = "../../assets/icone-celular.png";

    constructor(private navegacao: NavController) { }

      ngOnInit() {
    }

    recuperar() {
      this.resultado = this.pesquisa;
    }

    abrirBotoes() {
      this.navegacao.navigateForward('botoes');
    }
    abrirListas() {
      this.navegacao.navigateForward('lista');
    }

    public atualiza(): void {
      this.titulo = "Texto alterado"
    }

    public acao(): void {
      this.titulo = "Botão clicado"
    }

}
