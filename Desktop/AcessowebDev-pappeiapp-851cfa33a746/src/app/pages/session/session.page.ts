import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { ResetPasswordPage } from 'src/app/pages/reset-password/reset-password.page';
import { AuthService } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/domain/user.service';
import Credentials from '../../models/credencials'
@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  public nameGreeting= this.global.nameFacebook;
  creds : Credentials ={
    email:this.global.emailFacebook,
    senha:""
  }
  constructor(
    public router:Router,
    public auth:AuthService,
    public modalCtrl: ModalController,
    public global:GlobalService,
    public alertController:AlertController
    ) { }

  ngOnInit() {
   
  }

  login(){
  
    this.auth.authenticate(this.creds)
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

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async forgot_password() {
    const modal = await this.modalCtrl.create({
      component: ResetPasswordPage,
      animated: true,
      mode: 'ios',
      swipeToClose:true,
      keyboardClose:false,
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }
  
  
 
  
}
