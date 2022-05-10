import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import CredencialRegister from 'src/app/models/credencialRegister';
import { AuthService } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/domain/user.service';

@Component({
  selector: 'app-create-user-screen-alt',
  templateUrl: './create-user-screen-alt.page.html',
  styleUrls: ['./create-user-screen-alt.page.scss'],
})
export class CreateUserScreenAltPage implements OnInit {
  obj : CredencialRegister ={
    
    nome:'',
    email:'',
    senha:''
   
  }
  constructor( 
    public userService:UserService,
    public auth:AuthService,
    public alertController:AlertController
    ) { }

  ngOnInit() {
  }

  register(){
   
    this.userService.insertUser(this.obj)
  .subscribe(Response=>{
   
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

  public login(){

    const creds={
      email:this.obj.email,
      senha:this.obj.senha
    }

    this.auth.authenticate(creds)
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

}
