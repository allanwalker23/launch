import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { CardService } from 'src/app/services/domain/cards.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.page.html',
  styleUrls: ['./credit-card.page.scss'],
})
export class CreditCardPage implements OnInit {
  public cards;
  public showNull=true;
  constructor(public data:DataService,
    public router:Router,
    public cardsService:CardService,
    public notification:NotificationInterceptor,
    public actionSheetController:ActionSheetController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.notification.verifyDelivery()

    this.getCards()
    
  }

  goCreate(){
    this.router.navigateByUrl('create-credit-card')
  }

  getCards(){
    this.cardsService.findAll()
    .subscribe(response =>{
     this.cards=response;
     console.log(this.cards)
      if(!this.isEmpty(this.cards)){
        this.showNull=false;
      }
      
    },
    error=>{ 
      console.log(error)
    })
  }

  hideNumber(number){
    for(let i=0;i<=number.length;i++){
      
      number[i].numero=number[i].numero.slice(0,number[i].numero.length-4);
    }
  }

   async optionsCreditCard(page:{id:string,nome_portador:string,bandeira:string}) {
    
    const actionSheet = await this.actionSheetController.create({
      header: page.nome_portador,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Remover',
        icon: 'trash-outline',
        role: 'color',
        handler: () => {
          
          this.cardsService.deleteCard(Number(page.id)).subscribe(r=>{
            console.log(r)
          })
            this.ionViewWillEnter();
          
        }
      },
       {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
