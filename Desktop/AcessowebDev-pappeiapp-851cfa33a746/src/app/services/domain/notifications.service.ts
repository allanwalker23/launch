import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class NotificationService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

   
    findAll(): any{
        
        
        return this.http.get(
            API_CONFIG.baseUrl+"/notifications/",
            
            {responseType:'json'})
            
        }

           
        }

