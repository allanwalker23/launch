import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertController } from '@ionic/angular';
import { API_CONFIG } from '../config/api.config';
import Credentials from '../models/credencials'
import { LocalUser } from '../models/localUser';
import { UserService } from './domain/user.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService{

    jwtHelper:JwtHelperService= new JwtHelperService();

    constructor(
        public http:HttpClient,
        public storage:StorageService,
        public router:Router,
        public userService:UserService,
        public alertController:AlertController
        ){

    }
    

    authenticate(creds:Credentials){
        return this.http.post(API_CONFIG.baseUrl+"/sessions",
        creds,
        {
            observe: 'response',
            responseType: 'json'
        })
    }


    async successfulLoginSplash(authValue:string){
        if(!this.jwtHelper.isTokenExpired(authValue)){
            let user :LocalUser ={
                token:authValue,
                id:this.jwtHelper.decodeToken(authValue).sub
    
            }
            this.storage.setLocalUser(user)
            this.router.navigateByUrl('feed')

           

        }else{
           
            const alert = await this.alertController.create({
                header: 'Erro',
                message: "Sessão Expirada",
                buttons: ['OK']
              });
            
              await alert.present();    
            location.reload();  
        }
        
    }

    async successfulLogin(authValue:string){
        if(!this.jwtHelper.isTokenExpired(authValue)){
            let user :LocalUser ={
                token:authValue,
                id:this.jwtHelper.decodeToken(authValue).sub
    
            }
            this.storage.setLocalUser(user)
          
            location.reload(); 


        }else{
            const alert = await this.alertController.create({
                header: 'Erro',
                message: "Sessão Expirada",
                buttons: ['OK']
              });
            
              await alert.present();    
            location.reload();  
        }
        
    }

    verifyToken(){
        try{
            let token=this.storage.getLocalUser().token || null
            this.successfulLoginSplash(token)
        }catch(err){
            this.router.navigateByUrl('introduction-page')   
        }
        
        
        

    }

    logout(){
        this.storage.setLocalUser(null)
        this.router.navigateByUrl('introduction-page')
    }

     deleteAccount(){
        this.userService.deleteUser().subscribe(r=>{
          
        })
        this.logout()
      }

   
}