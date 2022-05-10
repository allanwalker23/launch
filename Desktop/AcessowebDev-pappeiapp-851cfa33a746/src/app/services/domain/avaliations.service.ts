import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class AvaliationService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

    findByStore(id:number):any{
        
        
        return this.http.get(
            API_CONFIG.baseUrl+"/ratings/findByStore/"+id,
            
            {responseType:'json'})
            
        }
        findByUser():any{
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.get(
                API_CONFIG.baseUrl+"/ratings/all",
                
                {headers:authHeader,
                responseType:'json'})
                
            }

        
                insertAvaliation(obj){
                    let token = this.storage.getLocalUser().token;
                    let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                    return this.http.post(
                        API_CONFIG.baseUrl+"/ratings/",
                        obj,
                        {headers:authHeader,
                        responseType:'json',
                        observe:'response'})
                }

                getMedia(id){
                    
                    return this.http.get(
                        API_CONFIG.baseUrl+"/ratings/getStars/"+id,
                        {responseType:'json',
                        observe:'response'})
                }
        }

        

        
