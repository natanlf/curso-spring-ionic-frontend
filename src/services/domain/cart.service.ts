import { ProdutoDTO } from './../../models/produto.dto';
import { Cart } from '../../models/cart';
import { StorageService } from './../storage.service';
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class CartService{
    constructor(public storage: StorageService){

    }

    createOrClearCart(): Cart{
        let cart : Cart = {items:[]}; //criamos o carrinho vazio
        this.storage.setCart(cart); //armazenamos no localstorage 
        return cart;
    }

    getCart(): Cart{
        let cart : Cart = this.storage.getCart(); //pega o carrinho
        if(cart==null){ //se o carrinho é nulo então o crio
            cart = this.createOrClearCart();
        }
        return cart;
    }

    //adicionar um produto ao carrinho que está no storage
    addProduto(produto: ProdutoDTO) : Cart{
        let cart = this.getCart(); //pego o carrinho e caso não exista essa função cria
        //vou buscar no carrinho se o produto existe
        //findIndex é uma função do javascript que procura a posição de um elemento
        //vou procurar com o findindex um produto com o mesmo código que estpu recebendo nesse método
        //vai comporar id do produto que está no carrinho com o id do produto passado no método
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        //se o produto existir na lista vai ser retornado a posição dele, caso contrário vai retornar -1
        if(position==-1){ //produto não existe no carrinho, então o coloco no carrinho
            cart.items.push({quantidade: 1, produto: produto});
        }
        //após adicionar o produto no carrinho preciso atualizar meu carrinho no localstorage
        this.storage.setCart(cart);
        return cart;
    }
}