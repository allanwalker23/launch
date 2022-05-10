import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from 'src/app/models/domain/adress';
import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class OrdersService{

    constructor(public http:HttpClient,public storage:StorageService){

    }
    findAll(): any{
        let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        
        return this.http.get(
            API_CONFIG.baseUrl+"/orders/allOrders/",
            
            {
                headers:authHeader,
            responseType:'json'})
            
        }

        findOrderById(id:number): any{
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.get(
                API_CONFIG.baseUrl+"/orders/"+id,
                
                {headers:authHeader,
                responseType:'json'})
                
            }
    

        

            insertOrder(obj) {
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.post(
                API_CONFIG.baseUrl+"/orders/",
                obj,
                {headers:authHeader,
                responseType:'json',
                observe:'response'})
                
            }

            insertOrderItem(obj) {
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.post(
                    API_CONFIG.baseUrl+"/ordersItem/",
                    obj,
                    {headers:authHeader,
                        responseType:'json',
                        observe:'response'}
                )
                    
                }

                findOrderItem(id:number) {
                    let token = this.storage.getLocalUser().token;
                    let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                    
                    return this.http.get(
                        API_CONFIG.baseUrl+"/ordersItem/"+id,
                        {headers:authHeader,
                            responseType:'json'
                            }
                    )
                        
                    }
                deleteOrder(id:number){
                  
                    
                    return this.http.delete(
                        API_CONFIG.baseUrl+"/orders/"+id,
                        {responseType:'json'}
                    )
                  
                }
        }

