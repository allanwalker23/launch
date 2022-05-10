import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import {Store} from '../../models/domain/store'
import { StorageService } from '../storage.service';
@Injectable()
export class StoreService {
navData:any;
  constructor(public http:HttpClient,public storage:StorageService) { }

  findAll(){
    return this.http.get(
      API_CONFIG.baseUrl+"/stores/all",
      {responseType:'json'}
      
      )
      
  }

  findById(id:number):any{
    return this.http.get(
      API_CONFIG.baseUrl+"/stores/"+id,
        
        {responseType:'json'})
        
    }

    findByName(name:string):any{
      return this.http.get(
        API_CONFIG.baseUrl+"/stores/findByName/"+name,
          
          {responseType:'json'})
          
      }
    setNavData(navObj){
      this.navData=navObj
    }

    getNavData(){
      
      return this.navData;
    }
  
  }


