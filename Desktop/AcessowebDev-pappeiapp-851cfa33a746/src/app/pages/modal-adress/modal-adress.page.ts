import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { AdressService } from 'src/app/services/domain/adress.service';
import { StorageService } from 'src/app/services/storage.service';
import { CepService } from 'src/app/services/viacep-api/cep.service';

@Component({
  selector: 'app-modal-adress',
  templateUrl: './modal-adress.page.html',
  styleUrls: ['./modal-adress.page.scss'],
})
export class ModalAdressPage implements OnInit {
  id_user:number;
  nameAdress:string
  cep:number;
  rua:string;
  numero:number;
  complemento:string=null;
  bairro:string;
  cidade:string;
  estado:string;
  
  constructor(
    public router:Router,
    public data:DataService,
    public cepService:CepService,
    public adressService:AdressService,
    public storage:StorageService,
    public modalCtrl: ModalController,
    public alertController:AlertController
  ) { }

  ngOnInit() {
  }

  getData(){
    this.cepService.getData(this.cep)
    .subscribe(response =>{
      this.rua=response.logradouro
      this.bairro=response.bairro
      this.cidade=response.localidade
      this.estado=response.uf
      console.log(response)
    })
  }

  createAdress(){
    
    let cidade_id;
    let estado_id;

    this.adressService.getEstado(this.estado)
    .subscribe(r1 =>{
      
      
      this.adressService.getCidade(this.cidade)
      .subscribe(async r2 =>{
        cidade_id=r2;  
        try{
        let obj ={
          cliente_id:Number(this.id_user),
          nome:this.nameAdress.toString(),
          cep:this.cep.toString(),
          logradouro:this.rua.toString(),
          numero:this.numero.toString(),
          complemento:this.complemento.toString(),
          bairro:this.bairro.toString(),
          cidade_id:Number(cidade_id[0].id),
          estado_id:Number(cidade_id[0].estado_id)
        }
        this.adressService.insertAdress(obj)
        .subscribe(r=>{

          this.router.navigateByUrl('store-details')
          this.dismiss()
        },
        async error=>{
          
          const alert = await this.alertController.create({
            header: 'Erro',
            message: error,
            buttons: ['OK']
          });
        
          await alert.present();
        })
      }catch(err){
       
        const alert = await this.alertController.create({
          header: 'Erro',
          message: "Oops! você precisa informar todos os valores",
          buttons: ['OK']
        });
      
        await alert.present();
      }
        
      
      })
  
    })
    
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  

}
