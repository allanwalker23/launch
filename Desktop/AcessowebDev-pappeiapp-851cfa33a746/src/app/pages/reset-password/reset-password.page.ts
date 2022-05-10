import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.services';
import { PasswordService } from '../../services/domain/password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
email:string;
  constructor(
    public router:Router,
    public passwordService:PasswordService,
    public modalCtrl: ModalController, 
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  sendMail(){
    console.log(this.email)
    this.passwordService.forgot(this.email)
    .subscribe(async Response=>{
   
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: "Email enviado com sucesso, verifique sua caixa seu inbox",
        buttons: ['OK']
      });
    
      await alert.present();
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
