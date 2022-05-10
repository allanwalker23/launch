import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage.config';
import { LocalUser } from '../models/localUser';

@Injectable()
export class StorageService{

    getLocalUser():LocalUser{
        let user = localStorage.getItem(STORAGE_KEYS.localUser)
        if(user==null){
            return null;
        }else{
            return JSON.parse(user)
        }

        
    }

    showNotificationDelivery(pedido_id:string){
        localStorage.setItem(pedido_id,"1")
        //-1 = Notificação 1(Saiu Entrega) foi acionada
        //-2 = Notificação 1(Saiu Entrega) e Noticação 2(Cancelada) acionada
    }


    showNotificationCancel(pedido_id:string){
        localStorage.setItem(pedido_id,"2")
        //-1 = Notificação 1(Saiu Entrega) foi acionada
        //-2 = Notificação 1(Saiu Entrega) e Noticação 2(Cancelada) acionada
    }

    getNotification(pedido_id:string){
        return localStorage.getItem(pedido_id)
        
    }

    enablePagSeguro(){
        localStorage.setItem("statePagSeguro","1")

    }

    getNameButton(){
        let state=localStorage.getItem("statePagSeguro")
        let nameButton="";
        if(state=="1"){
            nameButton="HABILITAR SANDBOX"
        }else{
            nameButton="DESABILITAR SANDBOX"
        }
        return nameButton;
    }

    getStateButton(){
        let state=localStorage.getItem("statePagSeguro")
        let res:boolean;
        if(state=="1"){
            res=true;
        }else{
            res=false
        }
        return res;
    }

    getStatePagSeguro(){
        let state=localStorage.getItem("statePagSeguro")
        let res:boolean;
        if(state=="1"){
            res=false;
        }else{
            res=true
        }
        return res;
    }

    disablePagSeguro(){
        localStorage.setItem("statePagSeguro","0")
    }

    setLocalUser(obj:LocalUser){
        if(obj==null){
            localStorage.removeItem(STORAGE_KEYS.localUser)
        }else{
            localStorage.setItem(STORAGE_KEYS.localUser,JSON.stringify(obj))
    }

    

    

    

    }

}