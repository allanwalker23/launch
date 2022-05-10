import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { API_CONFIG } from '../../config/api.config';
import {Operation} from '../../models/domain/operation'
@Injectable()
export class OperationService {
public HORARIO;
public hoursServer;
public minutesServer;
public dayServer;


  constructor(public http:HttpClient,public global:GlobalService) { }


  findAll(){
    let day = new Date().getUTCDay()
    console.log(this.global.dayServer)
    return this.http.get(
      API_CONFIG.baseUrl+"/operations/"+this.global.dayServer
      
      )
      
  }

  getHoursAndMinutes(){
    return this.http.get(
      API_CONFIG.baseUrl+"/times/"
      
      )
      
  }
  verifyOperation(){
  
    let hours=this.hoursServer-3
    let minutes=this.minutesServer;
    console.log("horas:"+hours)
    console.log("minutos:"+minutes)
    //Tratativa para Horas e Minutos Da Tabela de Funcionamento
    let hoursInicio= this.HORARIO.horaInicio.slice(0,2);
    let minutesInicio= this.HORARIO.horaInicio.slice(3,5);
    

    let hoursFinal= this.HORARIO.horaFinal.slice(0,2);
    let minutesFinal= this.HORARIO.horaFinal.slice(3,5);

    let empresa_id=this.HORARIO.empresa_id;
  
    //VERIFICAÇÃO HORAS E MINUTOS
    if(hours<=hoursFinal && hours>=hoursInicio){
      if(hours==hoursInicio){
        if(minutes>=minutesInicio){
          return empresa_id
   
        }else{
          return -5;
        }
      }else{
        if(hours==hoursFinal){
          if(minutes<=minutesFinal){
            return empresa_id

          }else{
            return -5;
          }
        }else{
          return empresa_id
        }
        
      }
      
    }else{
      return -5;
    }
    

  }

  setHora(horaInicio:string,horaFinal:string,empresa_id:number):number{
    this.HORARIO={
      horaInicio,
      horaFinal,
      empresa_id
    };
    return this.verifyOperation();

  }

  setMinutesServer(minutes){
      this.minutesServer=minutes;
  }

  setHoursServer(hours){
    this.hoursServer=hours
  }

  setDayServer(day){
    this.dayServer=day;
  }


 
}
  

