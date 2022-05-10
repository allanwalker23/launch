import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/domain/product';

@Injectable()
export class CepService {

  constructor(public http:HttpClient) { }


  getData(cep:number):any{
    return this.http.get<Product[]>(
        "https://viacep.com.br/ws/"+cep+"/json/",
        
        {responseType:'json'})
        
    }

    
  
  }






