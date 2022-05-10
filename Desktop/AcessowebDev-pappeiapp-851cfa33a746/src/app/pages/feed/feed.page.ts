import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { Store } from 'src/app/models/domain/store';
import { AdressService } from 'src/app/services/domain/adress.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { OperationService } from 'src/app/services/domain/operation.service';
import { PromotionsService } from 'src/app/services/domain/promotions.service';
import { RaioService } from 'src/app/services/domain/raio.service';
import { SegmentService } from 'src/app/services/domain/segments.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { StorageService } from 'src/app/services/storage.service';
import { DataService } from '../../services/data.service';
import { AvaliationsPage } from '../avaliations/avaliations.page';
import { CreateAdressEXPage } from '../create-adress-ex/create-adress-ex.page';
import { ModalAdressPage } from '../modal-adress/modal-adress.page';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }
  public adress;
  public categories =[];
  public promotions =[];
  public restaurants:any;
  public idsRestaurant=[];
  public hoursServer;
  public minutesServer;
  public stars=0
  public unsubscribeBackEvent: any;
  
  public quantityAvaliations=0;
  constructor(
     private data:DataService,
     public router:Router,
     public storeService:StoreService,
     public raioService:RaioService,
     public operationService:OperationService,
     public global:GlobalService,
     public notification:NotificationInterceptor,
     public segmentService:SegmentService,
     public promotionService:PromotionsService,
     public modalCtrl: ModalController,
     public avalationService:AvaliationService,
     public loadingController:LoadingController,
     public adressService:AdressService,
     public platform:Platform,
     public storage:StorageService, 
     public alertController:AlertController) { 


     
      
     }

     
     ionViewDidEnter() {

      this.initializeBackButtonCustomHandler();
  
    }

    ionViewWillLeave() {

      this.unsubscribeBackEvent.unsubscribe();

    }

 ngOnInit() {
  this.loadingContents();
  
  
  //this.showBoxAvaliation();
  if(this.storage.getLocalUser()!=null){
     this.notification.verifyDelivery();
    this.notification.verifyDeliveryTimeout();
  }
 
  this.getDateServer();

  //RETORNANDO SEGMENTOS
  this.segmentService.findAll()
  .subscribe(r=>{
    this.categories=r;
    
  })


  //RETORNANDO PROMOÇÕES
  this.promotionService.findAll()
  .subscribe(r=>{
    this.promotions=r;
  })



    //RETORNO DOS ID'S COM RESTAURANTE ABERTO
   let operations:any;
   this.operationService.findAll()
   .subscribe(response=>{
     operations=response;
     
     operations.map((operation)=>{
      console.log(operation)
     let empresa_id= this.operationService.setHora(operation.horario_inicio,operation.horario_final,operation.empresa_id);
     this.idsRestaurant.push(empresa_id) 
     
    
     })
   })

   //RETORNANDO RESTAURANTES
   this.storeService.findAll()
   .subscribe(response=>{
    
    this.restaurants=response;
    
    this.restaurants.map((res)=>{
     
     this.avalationService.getMedia(res.id).
     subscribe(r=>{
       
       res.estrela=r.body;

     })
    let minutes=this.convertMinutes(res.tempo_entrega)
    res.tempo_entrega=minutes;

    //ADICIONANDO RAIO NOS RESTAURANTES
    this.raioService.findAll(res.raio_id)
      .subscribe(response =>{
        res.raio=response
        
      })
     
      res.fechado = true
      })
     
      console.log(this.idsRestaurant)

    //ABRINDO RESTAURANTES
    for(let i=0; i<=this.idsRestaurant.length+1;i++){
      console.log(this.idsRestaurant[i])
      

      if(this.idsRestaurant[i]!=-5 && this.idsRestaurant[i]!=null){
        for(let i2=0;i2<=this.restaurants.length;i2++){
          console.log("oi")
          if(this.restaurants[i2].id==this.idsRestaurant[i]){
          
            this.restaurants[i2].fechado=false;
            console.log("ABERTOO")
          }
      
        }
        
      }else{
        
        this.restaurants[this.idsRestaurant[i]].fechado=true;
        console.log("FECHADOO")
      }
  
    }
    
     },
     error=>{
       
     })

    
  }


  getDateServer(){

    this.operationService.getHoursAndMinutes()
    .subscribe(response =>{
    let aux
    aux=response;
    this.operationService.setHoursServer(aux.hours);
    this.operationService.setMinutesServer(aux.minutes);
    this.operationService.setDayServer(aux.day)
    
    })

  }
  

  

  async goRestaurant(page:{id:string,logo:string,raio,tempo_entrega:string,fechado:boolean,nome:string,taxa_entrega:string,estrela:number}){
  
    if(page.fechado==true){
      const alert = await this.alertController.create({
        header: 'Erro',
        message: "Restaurante fechado",
        buttons: ['OK']
      });
    
      await alert.present();
      this.global.idStoreSelected=page.id;

      // this.getAdressAndContinue()
      this.router.navigateByUrl('store-details')
     
    }else{
      
      this.global.idStoreSelected=page.id;
      
      // this.getAdressAndContinue()
      this.router.navigateByUrl('store-details')
    }
   
  }

  goCart(){
    this.router.navigateByUrl('cart-details')
   }

   goNotifications(){
    this.router.navigateByUrl('notifications-details')
   }

   convertMinutes(horas:string):number{
     
    let aux;
    aux = horas.split(":")
    let minutos=((Number(aux[0])*60)+Number(aux[1]));
    return minutos
   }

   goStoresSegment(page:{id:string,nome:string}){
     
    this.global.idSegmentSelected=page.id
    this.global.nameSegmentSelected=page.nome;
    this.router.navigateByUrl('segments')
   }

   goPromotion(page:{empresa_id:number}){
  
    this.storeService.findById(page.empresa_id)
    .subscribe(async r=>{

      this.avalationService.getMedia(r.id).
     subscribe(r1=>{
       
       r.estrela=r1.body;

     })
    let minutes=this.convertMinutes(r.tempo_entrega)
    r.tempo_entrega=minutes;

    //ADICIONANDO RAIO NOS RESTAURANTES
    this.raioService.findAll(r.raio_id)
      .subscribe(response =>{
        r.raio=response
        
      })
     
      r.fechado = true

      for(let i=0; i<=this.idsRestaurant.length;i++){
      
            if(r.id==this.idsRestaurant[i]){
            
              r.fechado=false;
              
            }
          
        
    
      }

      

      if(r.fechado==false){
        const alert = await this.alertController.create({
          header: 'Erro',
          message: "Restaurante fechado",
          buttons: ['OK']
        });
      
        await alert.present();
        
        this.global.idStoreSelected=r.id;
        this.router.navigateByUrl('store-details')
      //  this.getAdressAndContinue()
       }else{
        
        this.global.idStoreSelected=r.id;
        this.router.navigateByUrl('store-details')
        // this.getAdressAndContinue()
       }
    })
   
   
  }



  async showBoxAvaliation() {
    const modal = await this.modalCtrl.create({
      component: AvaliationsPage,
      animated: true,
      mode: 'ios',
      swipeToClose:true,
      keyboardClose:false,
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  convertStars(value:number){
    
    let v = Number(value).toFixed(1)

    return v.toString();

   }

   async loadingContents() {
    const loading = await this.loadingController.create({
      cssClass: 'login-modal',
      message: 'Carregando...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
  }

  goSearch(){
    this.router.navigateByUrl('search-details')
  }

  async createAdress() {
    const modal = await this.modalCtrl.create({
      component: ModalAdressPage,
      animated: true,
      swipeToClose:true,
      keyboardClose:false,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'adress-modal',
    })

    return await modal.present();
  }

  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

initializeBackButtonCustomHandler(): void {

  this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999,  () => {

        navigator['app'].exitApp();
        
  });

}

}
