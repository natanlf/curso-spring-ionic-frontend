import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({ //@Component faz ser o controller de alguma view
  selector: 'page-home',
  templateUrl: 'home.html' //view desse controller
})
export class HomePage { //controller da view home.html

  constructor(public navCtrl: NavController) {

  }

}
