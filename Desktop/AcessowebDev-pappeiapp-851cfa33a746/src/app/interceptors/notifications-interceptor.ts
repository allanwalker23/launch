
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';

import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrdersService } from '../services/domain/orders.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Injectable()
export class NotificationInterceptor{
    public orders;
    constructor(public router:Router,
        public orderService:OrdersService,
        public notifications:LocalNotifications,
        public storage:StorageService) {}

    
    verifyDelivery(){
  

        this.orderService.findAll()
        .subscribe(response=>{
                
          this.orders=response;
      
          if(this.orders){
            
          for(let i=0;i<=this.orders.length;i++){
            let state=this.storage.getNotification(this.orders[i].id.toString())
            if(state=='1'){
              if(this.orders[i].status=='4'){
                this.showNotificationCancel();
                this.storage.showNotificationCancel(this.orders[i].id.toString());
            }
            }else if(state=='2'){

            }else{
              if(this.orders[i].status=='2'){
                  this.showNotificationDelivery();
                  this.storage.showNotificationDelivery(this.orders[i].id.toString());
              }
              if(this.orders[i].status=='4'){
                this.showNotificationCancel();
                this.storage.showNotificationCancel(this.orders[i].id.toString());
            }
            }
            
           
          }
        }
      })
        
      
        
    }


    verifyDeliveryTimeout(){
        setInterval(()=>{
          this.orderService.findAll()
          .subscribe(response=>{
                  
            this.orders=response;
        
            if(this.orders){
              
            for(let i=0;i<=this.orders.length;i++){
              let state=this.storage.getNotification(this.orders[i].id.toString())
              if(state=='1'){
                if(this.orders[i].status=='4'){
                  this.showNotificationCancel();
                  this.storage.showNotificationCancel(this.orders[i].id.toString());
              }
              }else if(state=='2'){

              }else{
                if(this.orders[i].status=='2'){
                    this.showNotificationDelivery();
                    this.storage.showNotificationDelivery(this.orders[i].id.toString());
                }
                if(this.orders[i].status=='4'){
                  this.showNotificationCancel();
                  this.storage.showNotificationCancel(this.orders[i].id.toString());
              }
              }
              
             
            }
          }
        })
          },30000)
    }
    public showNotificationDelivery(){
        this.notifications.schedule([{
          id: 1,
          title:'Pappei',
          text: 'Seu pedido saiu para entrega!',
          lockscreen:true,
          wakeup:true,
          led: 'FF0000',
          priority:1,
          foreground:true,
          icon:'res://notication_icon.png'
         }]);
       
      }
      
      public showNotificationCancel(){
        this.notifications.schedule([{
          id: 2,
          title:'Pappei',
          text: 'Seu pedido foi cancelado',
          lockscreen:true,
          wakeup:true,
          led: 'FF0000',
          priority:2,
          vibrate:true,
          autoClear:true,
          icon:'res://notification_icon2.png'
         }]);
       
      }
   
}


 