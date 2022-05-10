import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Raio } from 'src/app/models/domain/raio';
import { API_CONFIG } from '../../config/api.config';import {Store} from '../../models/domain/store'
import { StoreService } from './store.service';
@Injectable()
export class OptionPaymentService {
 
public ids=[]
  constructor(public http:HttpClient,public storeService:StoreService,public global:GlobalService) { }

  

  findAll(){
    return this.http.get(
      API_CONFIG.baseUrl+"/empresapag/"
      
      )
      
  }

  findById(id:number){
  
    return this.http.get(
      API_CONFIG.baseUrl+"/paymentsoption/"+id
      
      )
      
  }

 
  

}
  

