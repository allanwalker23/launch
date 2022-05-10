import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/domain/product';
import { API_CONFIG } from '../../config/api.config';import {Store} from '../../models/domain/store'
@Injectable()
export class ProductService {
public navData:any;
  constructor(public http:HttpClient) { }


  findById(id:number):any{
    return this.http.get<Product[]>(
      API_CONFIG.baseUrl+"/products/"+id,
        
        {responseType:'json'})
        
    }


    findByName(name:string):any{
      return this.http.get(
        API_CONFIG.baseUrl+"/products/findByName/"+name,
          
          {responseType:'json'})
          
      }


  findByProductId(id:number):any{
    return this.http.get(
      API_CONFIG.baseUrl+"/products/findProduct/"+id,
        
        {responseType:'json'})
        
    }

    setNavData(navObj){
      this.navData=navObj
    }

    getNavData(){
      
      return this.navData;
    }
  
  }

