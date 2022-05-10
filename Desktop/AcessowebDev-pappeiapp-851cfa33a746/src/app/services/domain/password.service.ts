import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class PasswordService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

    forgot(email:string){

        return this.http.post(
            API_CONFIG.baseUrl+"/password/forgot",
            {email},
            {responseType:'json',
            observe:'response'})
    }

}
        

        
