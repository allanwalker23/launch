import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { OrdersService } from 'src/app/services/domain/orders.service';
import { ProductService } from 'src/app/services/domain/product.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { AvaliationsPage } from '../avaliations/avaliations.page';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})

export class OrderDetailsPage implements OnInit {
public nameRestaurant;
public totalOrder;
public statusOrder;
public atendimento;
public store;
public aux;
public data_pedido="";
public data_delivery="";
public hora_agendada;
public data;
public itens=[];
  constructor(
    public orderService:OrdersService,
    public global:GlobalService,
    public modalCtrl:ModalController,
    public storeService:StoreService,
    public productService:ProductService,
    public router:Router
  
  ) { }

  ngOnInit() {
   
    
      this.orderService.findOrderById(this.global.idOrderSelected)
      
      .subscribe(Response=>{
        console.log(Response)
        this.statusOrder=Response.status;
        this.totalOrder=Response.valor
        this.data=Response.data_pedido;
        this.storeService.findById(Response.empresa_id)
        .subscribe(Response =>{
          this.nameRestaurant=Response.nome;
          this.atendimento=Response.responsavel_celular;
          this.fixTimeDelivery(this.convertMinutes(Response.tempo_entrega))
        })
  
        let aux
        this.orderService.findOrderItem(Response.id)
        .subscribe(Response=>{
  
        aux=Response;
       
       aux.order.map((pedidovenda)=>{
        
         this.productService.findByProductId(pedidovenda.produto_id)
         .subscribe(r=>{
           r.quantidade=pedidovenda.quantidade
           this.itens.push(r)
           
         })
       })
      
        
          
        })
      })
  
    
    

  }
  async showBoxAvaliation() {
    const modal = await this.modalCtrl.create({
      component: AvaliationsPage,
      animated: true,
      mode: 'ios',
      swipeToClose:true,
      keyboardClose:false,
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }





  fixTimeDelivery(tempo){
    
    let data=new Date(this.data);
        let minutos_entrega=Number(tempo);
        
        data.setHours(data.getHours())
        let hours_entrega=data.getHours()
        
        let minutes_pedido=data.getMinutes()
        
      
      this.data_pedido=hours_entrega+"h:"+minutes_pedido+"m";
      
      let minutes=new Date(data.setMinutes(data.getMinutes() + minutos_entrega))
      if((minutos_entrega+minutes_pedido)>=60){
        hours_entrega++;
        if((minutos_entrega+minutes_pedido-60)>=60){
          hours_entrega++;
        }
        
      }
      let minutesDelivery=minutes.getMinutes()
      
      this.hora_agendada=hours_entrega+"h:"+minutesDelivery+"m";
      this.data_delivery=hours_entrega+":"+minutesDelivery
      
  }

  
convertMinutes(horas:string):number{
     
  let aux;
  aux = horas.split(":")
  let minutos=((Number(aux[0])*60)+Number(aux[1]));
  return minutos
 }

  convertCurrency(value:number){
    
    let v = Number(value).toFixed(2)

    return v.toString().replace('.',',');

   }
  
    handleHome(){
     this.router.navigateByUrl('feed');
   }

}
