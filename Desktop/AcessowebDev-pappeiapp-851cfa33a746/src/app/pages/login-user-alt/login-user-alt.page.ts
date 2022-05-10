import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.services';
import Credentials from '../../models/credencials'
import { ResetPasswordPage } from '../reset-password/reset-password.page';

@Component({
  selector: 'app-login-user-alt',
  templateUrl: './login-user-alt.page.html',
  styleUrls: ['./login-user-alt.page.scss'],
})
export class LoginUserAltPage implements OnInit {
  creds : Credentials ={
    email:'',
    senha:''
  }
  constructor(
    public auth:AuthService,
    public router:Router,
    public modalCtrl: ModalController,
    public alertController: AlertController
  ) { }

  login(){
  
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
    
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

  ngOnInit() {
  }

  createAccount(){
    this.router.navigateByUrl('/create-user-screen-alt')
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
