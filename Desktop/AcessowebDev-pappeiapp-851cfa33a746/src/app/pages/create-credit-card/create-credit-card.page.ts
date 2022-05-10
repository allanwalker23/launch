import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { CartDetailsPage } from '../cart-details/cart-details.page';
import { DataService } from '../../services/data.service';
import { GlobalService } from 'src/app/global.service';
import { CardService } from 'src/app/services/domain/cards.service';
import { PagSeguroService } from 'src/app/services/domain/pagseguro.service';
import { AlertController } from '@ionic/angular';
declare var PagSeguroDirectPayment: any;


@Component({
  selector: 'app-create-credit-card',
  templateUrl: './create-credit-card.page.html',
  styleUrls: ['./create-credit-card.page.scss'],
})
export class CreateCreditCardPage implements OnInit {
  public nome;
  public vencimento_mes;
  public vencimento_ano;
  public numero;
  public bandeiraCard=null;
  public imageBandeira;
  constructor(
    public data:DataService,
    public router:Router,
    public global:GlobalService,
    public card:CardService,
    public pagSeguro:PagSeguroService, 
    public alertController:AlertController) { }

  ngOnInit() {
   
  }



  ionViewWillEnter(){
   
  
  }

  

  createCreditCard(){
  let obj ={
    nome_portador:this.nome,
    numero:this.numero,
    bandeira:null,
    vencimento_mes:this.vencimento_mes,
    vencimento_ano:this.vencimento_ano
  }
  this.card.insertCard(obj)
  .subscribe(Response=>{
    
    this.goBack()
  },
  async error=>{
    const alert = await this.alertController.create({
      header: 'Erro',
      message: error.error.message,
      buttons: ['OK']
    });
  
    await alert.present();
  })
    

  }

  goBack(){
    this.router.navigateByUrl('credit-card')
  }

  goCreditCardsAvalaible(){
    this.router.navigateByUrl('credit-card-avalaible')
  }

 

}

export interface Card {
name:string,
type:string
}