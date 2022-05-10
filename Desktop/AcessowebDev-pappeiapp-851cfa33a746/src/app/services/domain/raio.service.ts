import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raio } from 'src/app/models/domain/raio';
import { API_CONFIG } from '../../config/api.config';import {Store} from '../../models/domain/store'
@Injectable()
export class RaioService {

  constructor(public http:HttpClient) { }

  

  findAll(id:number):any{
    return this.http.get<Raio[]>(
      API_CONFIG.baseUrl+"/raios/"+id,
        
        {responseType:'json'})
        
    }
}
  

