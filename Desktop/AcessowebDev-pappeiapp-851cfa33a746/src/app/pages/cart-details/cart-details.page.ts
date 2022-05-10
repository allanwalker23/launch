
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { CartService } from 'src/app/services/cart/cart.service';
import { AdressService } from 'src/app/services/domain/adress.service';
import { CardService } from 'src/app/services/domain/cards.service';
import { OptionPaymentService } from 'src/app/services/domain/option.payment.service';
import { OrdersService } from 'src/app/services/domain/orders.service';
import { PagSeguroService } from 'src/app/services/domain/pagseguro.service';
import { UserService } from 'src/app/services/domain/user.service';

import { StorageService } from 'src/app/services/storage.service';
import { DataService } from '../../services/data.service';
declare var PagSeguroDirectPayment: any;

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.page.html',
  styleUrls: ['./cart-details.page.scss'],
})
export class CartDetailsPage implements OnInit {


public sandboxMode;
public items=null;
public idUser;
public adress;
public cards=[];
public taxa=0;
public optionPaymentSelected:string=null;
public optionPayment=null;
public subtotal;
public opcao_pagamento_id=null;
public total;
public cpfUser;
public empresa_id;
public troco=null;
public cvv=null;
public idAdress;
public visible=null;
public cardToken=null;
public onSenderHash=null;
public valorLayout="Informe aqui seu troco";
public typeCard;

  constructor(public data:DataService,
    public cartService:CartService,
    public router:Router,
    public global:GlobalService,
    public pay:OptionPaymentService,
    public adressService:AdressService,
    public alertController:AlertController,
    public storageService:StorageService,
    public userService:UserService,
    public orders:OrdersService,
    public cardService:CardService,
    public notification:NotificationInterceptor,
    public loadingController:LoadingController,
    public pagSeguroService:PagSeguroService) {
      
    this.taxa=this.global.taxaEntrega;
    let localUser = this.storageService.getLocalUser();
    if(localUser && localUser.id){
      this.idUser = localUser.id
    }
    

    this.empresa_id=this.global.idStoreSelected
    this.sandboxMode='1';
   
   }

  async ngOnInit() {
    
    this.userService.findAll()
    .subscribe(Response=>{
      
      this.cpfUser=Response.cpf;
      
    })

    this.items=this.cartService.getItemsInCart();

    this.items.map((item)=>{
      
      item.totalItem= Number(item.price * item.quantity).toFixed(2)  
    })



    this.adressService.findAll()
    .subscribe(Response=>{
      this.adress=Response
    })
    

    let sub=0;

    this.cartService.getItemsInCart().map(function(item){
      sub+=item.price * item.quantity;
      
      })
      this.subtotal=sub.toFixed(2);
      this.total=(Number(this.subtotal)+this.taxa).toFixed(2);
      
  
    
  }

  ionViewWillEnter(){
    this.notification.verifyDelivery()
    this.verifyOptionPayment();
  }

  selectAdress(event){
    let ev=event.detail.value;

    this.idAdress=ev;
    
  
  }

  convertCurrency(value:number){
    
    let v = Number(value).toFixed(2)

    return v.toString().replace('.',',');

   }

   

  goMethodPayments(){
    this.router.navigateByUrl('/method-payments')
  }

   addOrder(){
    
    let option = this.verifyOptionPayment()
    
    if(option=="pagseguro"){
      
       this.opcao_pagamento_id=null
      this.showInputCvv();
    }else{
      if(option=="maquininha"){

      }else if(option=="pagseguro"){
     
      }else{
      this.opcao_pagamento_id=null;
      }


   const order ={
    tipo_pagamento:option,
    valor:Number(this.total),
    taxa_entrega:Number(this.taxa),
    subtotal:Number(this.subtotal),
    empresa_id:Number(this.empresa_id),
    troco_valor:this.troco,
    nf_cpj:this.cpfUser,
    status:"0",
    opcao_pagamento_id:this.opcao_pagamento_id || null,
    valor_pappei:null,
    valor_final:Number(this.total),
    cash_back:null,
    cash_back_id:null,
    valor_cashback_utilizado:null,
    cliente_endereco_id:Number(this.idAdress),
    avaliado:null,
    data_aceite:null,
    data_limite_aceite:null,
    data_pronto:null,
    data_saiu_entrega:null,
    data_entregue:null,
    hora_agendada:null,
    valor_fraqueado:null,
    email_avaliacao:null,
    franqueado_id:null
  }

let pedido
let obj;
this.orders.insertOrder(order).subscribe(r=>{
 pedido=r.body
  console.log(pedido)
this.items.map((item=>{
  let obj={
    pedido_id:pedido.id,
    quantidade:item.quantity,
    produto_id:item.product_id,
    valor:item.totalItem,
    observacao:item.observation

  }
  this.orders.insertOrderItem(obj).subscribe(r=>{
    this.router.navigateByUrl('orders')
  },
  async error=>{
    this.orders.deleteOrder(pedido.id).
    subscribe(async r=>{
      
    })
    const alert = await this.alertController.create({
      header: 'Erro',
      message: error.error.message,
      buttons: ['OK']
    });

    await alert.present();
  })
  

  
  
}))
  

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

  formatDate(){
   
  }

  removeItem(item){
    for( var i = 0; i < this.items.length; i++){ 
    
      if ( this.items[i] === item) { 
  
          this.items.splice(i, 1); 
      }
  
  }
    
    this.ngOnInit()
  }

  
  

  verifyOptionPayment(){
    this.optionPaymentSelected=this.global.optionSelected;
    
    if(this.optionPaymentSelected!=null){
    if(this.optionPaymentSelected=="money"){
      this.optionPayment=null;
      this.visible=1;
      return "dinheiro";
      
    }else if(this.optionPaymentSelected.indexOf("c")==-1){
      this.visible=2;
      this.opcao_pagamento_id=this.optionPaymentSelected;
      this.pay.findById(Number(this.optionPaymentSelected))
      .subscribe(response =>{
        this.optionPayment=response
        
      })

      return "maquininha"
    }else if(this.optionPaymentSelected!=null){
      this.visible=3;
      let opc = this.optionPaymentSelected.slice(this.optionPaymentSelected.indexOf("c")+1,this.optionPaymentSelected.length)
      
      
      this.cardService.findById(Number(opc))
      .subscribe(response=>{
        this.optionPayment=response
        
      })

      return "pagseguro"
    }    
  }else{
    return null;
  }
  }

  

  async showNeedTroco() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Precisa de troco?",
      inputs: [
        {
          name: 'troco',
          type: 'number',
          placeholder: 'Digite aqui o troco'
        },
      ],
      buttons: [
        {
          text: 'Não preciso',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.valorLayout="Sem troco"
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
          this.troco=alertData.troco
          this.valorLayout="R$ "+alertData.troco
          }
        }
      ]
    });

    await alert.present();
}

async showInputCvv() {
  const alert = await this.alertController.create({
    cssClass: 'login-modal',
    header: "Informe o CVV do seu cartão",
    inputs: [
      {
        name: 'cvv',
        type: 'number',
        placeholder: 'Digite os três números do seu CVV'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
         
        }
      }, {
        text: 'Ok',
        handler: (alertData) => {
          this.cvv=alertData.cvv
        // this.paymentPagSeguro()
        
        }
      }
    ]
  });

  await alert.present();
}



paymentPagSeguro(){
  this.loadPagSeguroDirectPayment(false).then(() => {
    this.pagSeguroService.getSession().subscribe(r=>{
      PagSeguroDirectPayment.setSessionId(r);
      let opc = this.optionPaymentSelected.slice(this.optionPaymentSelected.indexOf("c")+1,this.optionPaymentSelected.length)
  
  
      this.cardService.findCardUnmask(Number(opc))
      .subscribe(response=>{
        
        
        PagSeguroDirectPayment.getBrand({
          
          cardBin: response[0].numero.substr(0,6),
          success: brand => {
            console.log(brand.brand.name);
            let card = {
              cardNumber: response[0].numero,
              brand: brand.brand.name,
              cvv: this.cvv,
              expirationMonth: response[0].vencimento_mes,
              expirationYear: response[0].vencimento_ano
            };

            PagSeguroDirectPayment.createCardToken({
              cardNumber: card.cardNumber,
              brand: card.brand,
              cvv: card.cvv,
              expirationMonth: card.expirationMonth,
              expirationYear: card.expirationYear,
              success: cardToken => 
              PagSeguroDirectPayment.onSenderHashReady(onSenderHash=>{
              this.addOrderPagSeguro(cardToken,onSenderHash,Number(opc))
              
              }),
              error: response => console.log("Bandeira do cartão não identificada"),
              complete: () => {
              }
            });

          

          },
          error: response => console.log("Bandeira do cartão não identificada"),
          complete: () => {}
        });  

    
      })
      
    })    
  });

}

async loadingContents() {
  const loading = await this.loadingController.create({
    cssClass: 'login-modal',
    message: 'Carregando...',
    duration: 7000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  
}


addOrderPagSeguro(cardToken,onSenderHash,idCard){
  this.loadingContents();
  this.userService.findAll()
  .subscribe(user=>{

    this.cardService.findById(idCard)
    .subscribe(card=>{

      this.adressService.findAdressById(Number(this.idAdress))
      .subscribe(adress=>{

        const pagSeguroOrder={
          user:user,
          creditCardHolderName:card[0].nome_portador,
          adress:adress,
          itens:this.items,
          creditCardToken:cardToken.card.token,
          onSenderHash:onSenderHash.senderHash,
          taxa:this.taxa || null,
          total:Number(this.total).toFixed(2)
        }

        this.pagSeguroService.insertOrderPagSeguro(pagSeguroOrder)
        .subscribe(async response=>{
          if(response.body==null){
       
         const alert = await this.alertController.create({
          header: 'Erro',
          message: "Oops! erro no processo de pagamento",
          buttons: ['OK']
        });
    
        await alert.present();
          }else{
            const order ={
    
              tipo_pagamento:"pagseguro",
              valor:Number(this.total),
              taxa_entrega:Number(this.taxa),
              subtotal:Number(this.subtotal),
              empresa_id:Number(this.empresa_id),
              troco_valor:this.troco,
              nf_cpj:this.cpfUser,
              status:"0",
              opcao_pagamento_id:this.opcao_pagamento_id || null,
              valor_pappei:null,
              valor_final:Number(this.total),
              cash_back:null,
              cash_back_id:null,
              valor_cashback_utilizado:null,
              cliente_endereco_id:Number(this.idAdress),
              avaliado:null,
              data_aceite:null,
              data_limite_aceite:null,
              data_pronto:null,
              data_saiu_entrega:null,
              data_entregue:null,
              hora_agendada:null,
              valor_fraqueado:null,
              email_avaliacao:null,
              franqueado_id:null
            }
          
          let pedido=null;
          this.orders.insertOrder(order).subscribe(r=>{
           
            pedido=r.body
          this.items.map((item=>{
            let obj={
              pedido_id:pedido.id,
              quantidade:item.quantity,
              produto_id:item.product_id,
              valor:item.totalItem,
              observacao:item.observation
          
            }
            this.orders.insertOrderItem(obj).subscribe(r=>{
              this.router.navigateByUrl('orders')
            },
            async error=>{
              this.orders.deleteOrder(pedido.id).
              subscribe(r=>{
                
              })
              const alert = await this.alertController.create({
                header: 'Erro',
                message: error.error.message,
                buttons: ['OK']
              });
            
              await alert.present();
            })
            
          
            
            
          }))
            
          
          },
          error=>{
            alert(error.error.message)
          })
          
          
          }
          
        })

        

      },
      err=>{
       
        console.log(err)
      
      }
      )

    })
     
    
  })

 


  
}



loadPagSeguroDirectPayment(sandbox:boolean) {  
  return new Promise((resolve) => {
    let script: HTMLScriptElement = document.createElement('script');
    script.addEventListener('load', r => resolve(''));
    script.src = sandbox ? "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js" : "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js" ;
    document.head.appendChild(script);
  });
}


}

export interface Response{
  id:number;
}
