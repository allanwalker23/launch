import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { UserService } from 'src/app/services/domain/user.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public foto;
  public nameButton;
  user={
    id: 0,
    data_cadastro:null,
    nome:"",
    senha:"",
    telefone:"",
    whatsapp:"",
    email:"",
    cpf:"",
    data_nascimento:""

  };
  public cpf:string;
 
 
  constructor(
    public service:UserService,
    public notification:NotificationInterceptor,
    public router:Router,
    public platform:Platform,
    public storage:StorageService, 
    public alertController:AlertController) { 

      this.platform.backButton.unsubscribe

      this.nameButton=this.storage.getNameButton();
      // this.maskpipe=new MaskPipe(this.maskpipe);

    }

  ngOnInit() {
    this.notification.verifyDelivery();
    this.service.findAll()
    .subscribe(response =>{
      
      this.user=response;
      this.foto=response.perfil
      
    },
    error =>{
      console.log(error)
    }
    )
    
  }

  // updateWithMask(event) { 

  //    this.form.controls.data_nasc.setValue(this.maskpipe.transform(event.currentTarget.value, '00/00/0000'));

  //   }

  clickButton(){
    let state =this.storage.getStateButton()
    if(state){
      this.storage.disablePagSeguro()
      this.router.navigateByUrl('feed')
    }else{
      this.storage.enablePagSeguro()
      this.router.navigateByUrl('feed')
    }
  }

  updateUser(){
    const userUpdate={
      nome:this.user.nome,
      cpf:this.user.cpf,
      telefone:this.user.telefone,
      whatsapp:this.user.whatsapp,
      email:this.user.email,
      data_nascimento:this.user.data_nascimento
    }

    this.service.update(userUpdate).subscribe(r=>{
      this.router.navigateByUrl('feed')
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

}
