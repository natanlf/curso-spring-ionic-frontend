import { ProdutoService } from '../../services/domain/produto.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { API_CONFIG } from '../../config/api.config';
 @IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
   items : ProdutoDTO[];
   constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService) {
  }

   ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id'); //assim pego o id que foi selecionado na página de categoria
    this.produtoService.findByCategoria(categoria_id)
    .subscribe(response=>{
      this.items = response['content'];
    },error=>{});

  };
}