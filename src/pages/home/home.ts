import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from '../../../node_modules/ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({ //@Component faz ser o controller de alguma view
  selector: 'page-home',
  templateUrl: 'home.html' //view desse controller
})
export class HomePage { //controller da view home.html

  constructor(public navCtrl: NavController, public menu: MenuController) { //navController permite navegar de uma página a outra
    //quando entrar na página home devemos desabilitar o menu e quando sair habilitar
  }

  ionViewWillEnter() { //quando for entrar na página acesso o menu e o desabilito    
    this.menu.swipeEnable(false);   
  } 
 
  ionViewDidLeave() {    //quando sair da página, volta com o menu 
    this.menu.swipeEnable(true);   
  }

  login(){
    //push empilha uma página em cima da outra
    //CategoriasPage é o nome do controlador de categorias que devo colocar para chegar a página de categorias
    //navegar de uma página para outra, sempre usar this.
    //this.navCtrl.push('CategoriasPage');
    this.navCtrl.setRoot('CategoriasPage'); //uso setRoot para não empilhar
  }
}
