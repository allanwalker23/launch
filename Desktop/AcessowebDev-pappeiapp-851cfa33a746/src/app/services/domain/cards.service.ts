import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class CardService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

    findById(id:number){
  
        return this.http.get(
          API_CONFIG.baseUrl+"/cards/id/"+id
          
          )
          
      }
    findAll(): any{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        
        return this.http.get(
            API_CONFIG.baseUrl+"/cards/all/",
            
            {headers:authHeader,
            responseType:'json'})
            
        }

            insertCard(obj) {
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.post(
                API_CONFIG.baseUrl+"/cards/",
                obj,
                {headers:authHeader,
                responseType:'json',
                observe:'response'})
                
            }

            deleteCard(id:number) {
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.delete(
                    API_CONFIG.baseUrl+"/cards/"+id,
                    {headers:authHeader,
                    responseType:'json',
                    observe:'response'})
                    
                }

            findCardUnmask(id:number){
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.get(
                    API_CONFIG.baseUrl+"/cards/numberUnmask/"+id,
                    
                    {headers:authHeader,
                    responseType:'json'})
                    
            }

            

           
        }

