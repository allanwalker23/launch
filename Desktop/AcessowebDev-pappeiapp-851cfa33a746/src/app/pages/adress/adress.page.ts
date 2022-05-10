
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { AdressService } from 'src/app/services/domain/adress.service';
import { StorageService } from 'src/app/services/storage.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {
  adress;
  id:number;
  public showNull=true;
  constructor(public router:Router,
    public data:DataService,
    public storage:StorageService,
    public adressService:AdressService,
    public notification:NotificationInterceptor,
    public actionSheetController: ActionSheetController,
    public global:GlobalService) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    //VERICANDO PEDIDO
    this.notification.verifyDelivery()

    
    this.getAdress()

     let refresh = setInterval(()=>{
  
      this.getAdress()
      },3000)
    }


 

  getAdress(){
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.id){
      this.id = localUser.id
    }
 
    this.adressService.findAll()
    .subscribe(response =>{
        
      if(!this.isEmpty(this.adress)){
        this.showNull=false;
      }
     this.adress=response;
     
     
    },
    error=>{ 
      console.log(error)
    })
  }
  
  goCreate(){
    this.router.navigateByUrl('create-adress-ex')
  }


  async optionsAdress(page:{id:string,nome:string}) {
    console.log(page.id)
    const actionSheet = await this.actionSheetController.create({
      header: page.nome,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Editar',
          icon: 'pencil-outline',
          role: 'color',
          handler: () => {
            this.global.idEditAdress=Number(page.id);
            this.router.navigateByUrl('edit-adress')
            
          }
        },
        {
        text: 'Remover',
        icon: 'trash-outline',
        role: 'color',
        handler: () => {
          this.adressService.deleteAdress(Number(page.id)).subscribe(r=>{
            this.ionViewWillEnter();
          })
          
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
