import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { CardService } from 'src/app/services/domain/cards.service';
import { OptionPaymentService } from 'src/app/services/domain/option.payment.service';
import { StoreService } from 'src/app/services/domain/store.service';

@Component({
  selector: 'app-method-payments',
  templateUrl: './method-payments.page.html',
  styleUrls: ['./method-payments.page.scss'],
})
export class MethodPaymentsPage implements OnInit {
public formPayment;
public ids=[];
public cardsPayments=[];
public optionSelected;
public cardsClient;
  constructor(
    public optionPay:OptionPaymentService,
    public storeService:StoreService,
    public global:GlobalService,
    public router:Router,
    public cardService:CardService,
    public loadingController:LoadingController) { }
  

   ngOnInit() {
    this.loadingContents()
    this.cardService.findAll()
    .subscribe(r=>{
      this.cardsClient=r;
    })


    let idStore = this.global.idStoreSelected;

    let options;
    this.optionPay.findAll()
   .subscribe(response=>{
     options=response;
     
     options.map(async (option)=>{
      
    this.storeService.findById(idStore)
    .subscribe(response =>{
      if(response.id==option.empresa_id){

         this.optionPay.findById(option.opcao_pagamento_id)
         .subscribe(response =>{
           
          
           this.cardsPayments.push(response)
         })
         
         
      }else{
        
      }
    })
     
     })
   })

  }

  selectOptionPayment(){

    this.global.optionSelected=this.optionSelected;
   
    this.router.navigateByUrl('cart-details')
  }

  async loadingContents() {
    const loading = await this.loadingController.create({
      cssClass: 'login-modal',
      message: 'Carregando...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
