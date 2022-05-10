import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { AuthService } from './services/auth.services';
import { UserService } from './services/domain/user.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public nome='Convidado';
  public isToken=this.storage.getLocalUser();
  public foto;
  public appPages = [
    { title: 'Meus dados', url: '/profile', icon: 'person' },
    { title: 'Meus pedidos', url: '/orders', icon: 'cart' },
    { title: 'Meus endereços', url: '/adress', icon: 'locate' },
    { title: 'Minhas avaliações', url: '/avaliation-user', icon: 'heart' },
    { title: 'Meus cartões', url: '/credit-card', icon: 'card' },
  
  ];
  
  constructor(
    public auth:AuthService,
    public userService:UserService,
    private platform: Platform,
    public router:Router,
    public storage:StorageService,
    public alertController:AlertController
    ) {
      // this.initializeApp();
      this.getNameUser()
     
    }

    
    initializeApp() {
     this.platform.ready().then(() => {
     
        this.router.navigateByUrl('splash');
      });
    }

  public logout(){
    this.auth.logout()
    this.isToken=null;
    
  }

  public goFeed(){
    this.router.navigateByUrl('feed')
  }

  public deleteAcount(){
    this.auth.deleteAccount()
  }

  public goLoginPage(){
    this.router.navigateByUrl('introduction-page')
  }

  public getNameUser(){
    try{
      let token = this.storage.getLocalUser().token;
      this.userService.findAll()
    .subscribe(r=>{
      this.nome=r.nome
      this.foto=r.perfil;
    })
    }catch(err){
      
    }
    
    
  }

  async confirmDeleteAccount() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Opa!',
      message: 'Tem certeza de que deseja excluir sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl('feed')
          }
        }, {
          text: 'Ok',
          handler: () => {
          this.deleteAcount();
          }
        }
      ]
    });
    await alert.present();


  }

}
