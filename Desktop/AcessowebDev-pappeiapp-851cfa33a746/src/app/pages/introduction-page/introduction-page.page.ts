import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import CredencialRegister from 'src/app/models/credencialRegister';
import { AuthService } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/domain/user.service';
import { RegisterPagePage } from '../register-page/register-page.page';
import { SessionPage } from '../session/session.page';

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.page.html',
  styleUrls: ['./introduction-page.page.scss'],
})
export class IntroductionPagePage implements OnInit {
public unsubscribeBackEvent:any;
// public objectFromFacebook:ResponseFacebook;
 public  obj ={
    nome:"",
    email:""
  }
  constructor(
    public auth:AuthService,
    public modalCtrl: ModalController,
    public platform:Platform,
    public fb:Facebook,
    public userService:UserService,
    public global:GlobalService,
    public router:Router
    ) { }

  ngOnInit() {
    
  }

   
  ionViewDidEnter() {

    this.initializeBackButtonCustomHandler();

  }

  ionViewWillLeave() {

    this.unsubscribeBackEvent.unsubscribe();

  }

  // fbLogin() {
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  //     .then(res => {
  //       if (res.status === 'connected') {
         
  //         this.getUserDetail(res.authResponse.userID);
  //       } else {
        
  //       }
  //     })
  //     .catch(e => console.log('Error logging into Facebook', e));
  // }

  loginAlt(){
    this.router.navigateByUrl('login-user-alt')
  }

  //  getUserDetail(userid: any) {
  //   this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
  //     .then(res => {
      
  //       this.objectFromFacebook = res;
  //       this.registerUser(this.objectFromFacebook.email,this.objectFromFacebook.name)

  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // registerUser(email:string, nome_completo:string){
  //   this.obj={
  //     email:email,
  //     nome:nome_completo
  //   }
  //   this.userService.insertUser(this.obj)
  // .subscribe(Response=>{
    
    
  // },
  // error=>{
  
  //   if(error.error.message=='Oops! este email já está sendo utilizado'){
  //     this.global.emailFacebook=this.objectFromFacebook.email;
  //     this.global.nameFacebook=this.objectFromFacebook.name;
  //     this.login();
  //   }
  //    if(error.error.message=='Oops! é preciso preencher todos os dados'){
  //     this.global.emailFacebook=this.objectFromFacebook.email;
  //     this.global.nameFacebook=this.objectFromFacebook.name;
  //     this.register();
  //   }
  // })
    
  // }
  // public loginUser(){

  //   const creds={
  //     email:this.obj.email,
  //     senha:this.obj.senha
  //   }

  //   this.auth.authenticate(creds)
  //   .subscribe(response =>{
  //     this.dismiss();
  //     this.auth.successfulLogin(response.body.toString())
      
  //   },
  //   error =>{
  //     if(error.error.error==undefined){

  //     }else{
  //       alert((error.error.error))
  //     }
      
  //   })
  // }
  

  async login() {
    const modal = await this.modalCtrl.create({
      component: SessionPage,
      animated: true,
      mode: 'ios',
      swipeToClose:true,
      keyboardClose:false,
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: RegisterPagePage,
      animated: true,
      swipeToClose:true,
      keyboardClose:false,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    })

    return await modal.present();
  }

  goFeed(){
    this.router.navigateByUrl('feed')
  }

initializeBackButtonCustomHandler(): void {

  this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(999999,  () => {

        navigator['app'].exitApp();
        
  });

}



}

interface ResponseFacebook{
    id: string, 
    name: string, 
    email: string, 
    picture: { 
        data: { 
            url: string 
        } 
    } 
}