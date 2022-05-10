import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import CredencialRegister from 'src/app/models/credencialRegister';
import { AuthService } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/domain/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  obj : CredencialRegister ={
    
    nome:this.global.nameFacebook,
    email:this.global.emailFacebook,
    senha:""
   
  }
  constructor(
    public modalCtrl: ModalController,
    public userService:UserService,
    public auth:AuthService,
    public global:GlobalService, 
    public alertController:AlertController
  ) { }

  ngOnInit() {

  }

  register(){
    console.log(this.obj)
    this.userService.insertUser(this.obj)
  .subscribe(Response=>{
    this.dismiss()
     this.login();
    
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


  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

  public login(){

    const creds={
      email:this.obj.email,
      senha:this.obj.senha
    }

    this.auth.authenticate(creds)
    .subscribe(response =>{
      this.dismiss();
      this.auth.successfulLogin(response.body.toString())
      
    },
    async error =>{
      if(error.error.error==undefined){

      }else{
        const alert = await this.alertController.create({
          header: 'Erro',
          message: error.error.error,
          buttons: ['OK']
        });
      
        await alert.present();
      }
      
    })
  }

}
