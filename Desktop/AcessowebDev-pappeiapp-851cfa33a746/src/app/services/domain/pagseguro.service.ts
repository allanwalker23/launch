import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class PagSeguroService{

    constructor(public http:HttpClient,public storage:StorageService){

    }
    getSession():any{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        
        return this.http.get(
            API_CONFIG.baseUrl+"/pagseguro/getSession",
            
            {headers:authHeader,
            responseType:'json'})
            
        }

        insertOrderPagSeguro(obj){
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.post(
                API_CONFIG.baseUrl+"/pagseguro/",
                obj,
                {responseType:'json',
                observe:'response',
                headers:authHeader})
        }

    }

        

        
