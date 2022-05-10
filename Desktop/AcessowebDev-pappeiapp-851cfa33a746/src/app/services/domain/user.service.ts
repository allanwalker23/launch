import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { API_CONFIG } from '../../config/api.config';import { StorageService } from '../storage.service';

@Injectable()
export class UserService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

    findAll():any{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        console.log(authHeader)
        return this.http.get<User[]>(
            API_CONFIG.baseUrl+"/users/all",
            
            {headers:authHeader,
            responseType:'json'})
            
        }

        findUserById(id:number):any{
            
            return this.http.get<User[]>(
                API_CONFIG.baseUrl+"/users/findUser/"+id,
                
                {responseType:'json'})
                
            }

        update(obj){
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.put(
                API_CONFIG.baseUrl+"/users/",
                obj,
                {headers:authHeader,
                responseType:'json',
                observe:'response'})
                
            }

            deleteUser() {
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.delete(
                    API_CONFIG.baseUrl+"/users/",
                    {headers:authHeader,
                    responseType:'json',
                    observe:'response'})
                    
                }

                insertUser(obj){

                    return this.http.post(
                        API_CONFIG.baseUrl+"/users/",
                        obj,
                        {responseType:'json',
                        observe:'response'})
                }
        }

        

        
