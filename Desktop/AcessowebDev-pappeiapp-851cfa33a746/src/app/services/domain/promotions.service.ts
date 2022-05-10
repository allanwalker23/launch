import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raio } from 'src/app/models/domain/raio';
import { API_CONFIG } from '../../config/api.config';import {Store} from '../../models/domain/store'
@Injectable()
export class PromotionsService {

  constructor(public http:HttpClient) { }

  

  findAll():any{
    return this.http.get(
      API_CONFIG.baseUrl+"/promotions/",
        
        {responseType:'json'})
        
    }
}
  

