import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { GlobalService } from '../../global.service';
import { NotificationInterceptor } from '../../interceptors/notifications-interceptor';
import { AdressService } from '../../services/domain/adress.service';
import { UserService } from '../../services/domain/user.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-adress.page.html',
  styleUrls: ['./edit-adress.page.scss'],
})
export class EditAdressPage implements OnInit {
   endereco:object ={
    id:0,
    nome:'',
    cep:'',
    logradouro:'',
    numero:'',
    complemento:'',
    bairro:'',
    cidade_id:0,
    estado_id:0
  }
  cidade
  estado
  id_adress
  constructor(
    public service:AdressService,
    public notification:NotificationInterceptor,
    public router:Router,
    public platform:Platform,
    public storage:StorageService,
    public global:GlobalService, 
    public alertController:AlertController) { 

      this.platform.backButton.unsubscribe

      this.id_adress=this.global.idEditAdress

    }

  ngOnInit() {
    this.service.findAdressById(this.id_adress)
    .subscribe(response =>{
      
      this.endereco=response;
      console.log(this.endereco)
      this.service.findCidadeById(response.cidade_id).subscribe((r:any)=>{
          
          this.cidade=r.nome;
          console.log(this.cidade)
      })

      this.service.findEstadoById(response.estado_id).subscribe((r:any)=>{
        this.estado=r.nome;
    })
    
      
    },
    error =>{
      console.log(error)
    }
    )

    
    
  }

  updateAdress(){
    
    console.log(this.endereco)
    this.service.updateAdress(this.endereco).subscribe(r=>{
      this.router.navigateByUrl('adress')
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


