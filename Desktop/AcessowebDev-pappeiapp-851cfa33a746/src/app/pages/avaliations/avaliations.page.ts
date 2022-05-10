import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { OrdersService } from 'src/app/services/domain/orders.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avaliations',
  templateUrl: './avaliations.page.html',
  styleUrls: ['./avaliations.page.scss'],
})
export class AvaliationsPage implements OnInit {
public stars=0;
public mensagem=null;
  constructor(
    public modalCtrl:ModalController,
    public global:GlobalService,
    public storeService:StoreService,
    public orderService:OrdersService,
    public avaliationService:AvaliationService,
    public router :Router,
    public alertController:AlertController
  ) { }

  ngOnInit() {
  }

  clickStar(star:number){
    console.log(star)
    this.stars=star
  }

  async saveAvaliation(){
    
    if(this.global.idOrderSelected==null){
      
      const alert = await this.alertController.create({
        header: 'Erro',
        message: "Oops! é preciso um pedido para se avaliar",
        buttons: ['OK']
      });
  
      await alert.present();
    }else{
      this.orderService.findOrderById(this.global.idOrderSelected)
    .subscribe(r=>{
      let obj ={
        empresa_id:r.empresa_id,
        mensagem:this.mensagem,
        pedido_id:this.global.idOrderSelected,
        avaliacao:this.stars
      }                      

      this.avaliationService.insertAvaliation(obj).
      subscribe(async r=>{
        this.dismiss();
       
        const alert = await this.alertController.create({
          header: 'Aviso',
          message: "Obrigado por utilizar o pappei, agradecemos por sua avaliação",
          buttons: ['OK']
        });
    
        await alert.present();
        this.router.navigateByUrl('feed')
      },
      
      async error=>{
        const alert = await this.alertController.create({
          header: 'Erro',
          message: error.error.message,
          buttons: ['OK']
        });
    
        await alert.present();
   
        this.dismiss()
      })
    })

    }
    

    
  }


  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  

}
