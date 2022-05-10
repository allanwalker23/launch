import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class SegmentService{

    constructor(public http:HttpClient,public storage:StorageService){}

    findAll():any{
       
        
        return this.http.get(
            API_CONFIG.baseUrl+"/segments/",
            
            {responseType:'json'})
            
        }

        findBySegment(id:number):any{
       
            
            return this.http.get(
                API_CONFIG.baseUrl+"/empresaseg/findBySegment/"+id,
                
                {responseType:'json'})
                
            }


    }

        

        
