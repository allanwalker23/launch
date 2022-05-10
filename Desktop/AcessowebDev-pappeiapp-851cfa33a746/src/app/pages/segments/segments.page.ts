import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { AdressService } from 'src/app/services/domain/adress.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { OperationService } from 'src/app/services/domain/operation.service';
import { RaioService } from 'src/app/services/domain/raio.service';
import { SegmentService } from 'src/app/services/domain/segments.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { ModalAdressPage } from '../modal-adress/modal-adress.page';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
  public categories =[];
  public restaurants=[];
  public idsRestaurant=[];
  public hoursServer;
  public minutesServer;
  public showNull=true;
  public adress;
  constructor(
    public router:Router,
     public storeService:StoreService,
     public raioService:RaioService,
     public operationService:OperationService,
     public global:GlobalService,
     public notification:NotificationInterceptor,
     public segmentService:SegmentService,
     public avalationService:AvaliationService,
     public loadingController:LoadingController,
     public adressService:AdressService,
     public modalCtrl:ModalController,
     public alertController:AlertController
  ) { }

  ngOnInit() {
   this.loadingContents();

    // this.notification.verifyDelivery();
    this.segmentService.findBySegment(this.global.idSegmentSelected)
    .subscribe(r=>{
      console.log(r)
      if(!this.isEmpty(r)){
        this.showNull=false;
      }
      r.map((empresaseg)=>{
        this.storeService.findById(empresaseg.empresa_id)
        .subscribe(r2=>{

            this.avalationService.getMedia(r2.id).
           subscribe(r=>{
            
             r2.estrela=r.body;

            })
            let minutes=this.convertMinutes(r2.tempo_entrega)
            r2.tempo_entrega=minutes;

    //ADICIONANDO RAIO NOS RESTAURANTES
    this.raioService.findAll(r2.raio_id)
      .subscribe(response =>{
        r2.raio=response
        
      })
     
      r2.fechado = true
          this.restaurants.push(r2)

          console.log(this.restaurants)
          
          for(let i=0; i<=this.idsRestaurant.length;i++){
        
            if(this.idsRestaurant[i]==-5){
              this.restaurants[this.idsRestaurant[i]].fechado=true;
            }else{
              for(let i2=0;i2<=this.restaurants.length;i2++){
                if(this.restaurants[i2].id==this.idsRestaurant[i]){
          
                  this.restaurants[i2].fechado=false;
                  console.log(this.restaurants[i2])
                }
      
      
            
            
            if(i2==this.restaurants.length-1){
              this.storeService.setNavData(this.restaurants)
            }
            
              }
              
            }
        
          }
          
           },
           error=>{
             
           })
      })
    
    
      })
    

    let operations:any;
   this.operationService.findAll()
   .subscribe(response=>{
     operations=response;
     
     operations.map((operation)=>{
      
     let empresa_id= this.operationService.setHora(operation.horario_inicio,operation.horario_final,operation.empresa_id);
     this.idsRestaurant.push(empresa_id) 
     console.log(empresa_id)
    
     })
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
      this.getAdressAndContinue()
      
    }else{

      this.global.idStoreSelected=page.id;
      this.getAdressAndContinue();
    
    }
   
  }


  convertStars(value:number){
    
    let v = Number(value).toFixed(1)

    return v.toString();

   }

   convertMinutes(horas:string):number{
     
    let aux;
    aux = horas.split(":")
    let minutos=((Number(aux[0])*60)+Number(aux[1]));
    return minutos
   }

   async loadingContents() {
    const loading = await this.loadingController.create({
      cssClass: 'login-modal',
      message: 'Carregando...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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

  getAdressAndContinue(){
    this.adressService.findAll()
    .subscribe(response =>{
        
    
     this.adress=response;
     if(this.isEmpty(this.adress)){
      this.createAdress()
      }else{
        this.router.navigateByUrl('store-details')
      }
     
    },
    error=>{ 
      console.log(error)
    })
  }

  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

}
