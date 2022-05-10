import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/domain/orders.service';
import { StoreService } from '../../services/domain/store.service';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { OperationService } from 'src/app/services/domain/operation.service';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  public orders;
  public hoursDelivery=0;
  public minutesDelivery=0;
  public showNull=true;
  constructor(
     public notifications:LocalNotifications,
     public orderService:OrdersService,
     public storeService:StoreService,
     public notification:NotificationInterceptor,
     public operationService:OperationService,
     public global:GlobalService,
     public router:Router
     ) { }

  ngOnInit() {
  
  }
  goDetails(page:{id:string}){
    this.global.idOrderSelected=page.id;
    this.router.navigateByUrl('order-details')
  }

ionViewWillEnter(){
  this.notification.verifyDeliveryTimeout();
  this.orderService.findAll()
  .subscribe(response=>{
          
    this.orders=response;
    if(!this.isEmpty(this.orders)){
      this.showNull=false;
    }
    for(let i=0;i<=this.orders.length;i++){
      this.storeService.findById(this.orders[i].empresa_id)
      .subscribe(response =>{
        this.orders[i].empresa=response
        this.fixTimeDelivery(this.orders[i],this.convertMinutes(response.tempo_entrega))
      })
    }
  })

  setInterval(()=>{
    this.orderService.findAll()
  .subscribe(response=>{
          
    this.orders=response;

    for(let i=0;i<=this.orders.length;i++){

      this.storeService.findById(this.orders[i].empresa_id)
      .subscribe(response =>{
        this.orders[i].empresa=response
        this.fixTimeDelivery(this.orders[i],this.convertMinutes(response.tempo_entrega))

      })
    }
  })
  },30000)
}

getDateServer(){

  this.operationService.getHoursAndMinutes()
  .subscribe(response =>{
  let aux
  aux=response;
  
  })

}

fixTimeDelivery(order,tempo){
  
  let data=new Date(order.data_pedido);
  
      let minutos_entrega=Number(tempo);
      
      //Time Brazil
      data.setHours(data.getHours())
      let hours_entrega=data.getHours()
      
      let minutes_pedido=data.getMinutes()
  
    
    let minutes=new Date(data.setMinutes(data.getMinutes() + minutos_entrega))
    if((minutos_entrega+minutes_pedido)>=60){
      hours_entrega++;
      if((minutos_entrega+minutes_pedido-60)>=60){
        hours_entrega++;
      }
      
    }
    let minutesDelivery=minutes.getMinutes()
    order.hora_agendada=hours_entrega+"h:"+minutesDelivery+"m";
    this.hoursDelivery=hours_entrega
    this.minutesDelivery=minutesDelivery;
    
}

convertMinutes(horas:string):number{
     
  let aux;
  aux = horas.split(":")
  let minutos=((Number(aux[0])*60)+Number(aux[1]));
  return minutos
 }

 public isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}



}



