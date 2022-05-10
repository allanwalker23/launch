import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from 'src/app/models/domain/adress';
import { API_CONFIG } from '../../config/api.config';
import { StorageService } from '../storage.service';

@Injectable()
export class AdressService{

    constructor(public http:HttpClient,public storage:StorageService){

    }

    findAll(): any{
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
        console.log(authHeader)
        return this.http.get<Adress[]>(
            API_CONFIG.baseUrl+"/adress/all",
            
            {headers:authHeader,
            responseType:'json'})
            
        }

        getCidade(nomeCidade){
            
            return this.http.get(
                API_CONFIG.baseUrl+"/city/"+nomeCidade,
                
                {
                responseType:'json',
               })
                
            }
            findCidadeById(id){
            
                return this.http.get(
                    API_CONFIG.baseUrl+"/city/findId/"+id,
                    
                    {
                    responseType:'json',
                   })
                    
                }

        findEstadoById(id){
                
                return this.http.get(
                    API_CONFIG.baseUrl+"/states/findId/"+id,
                    
                    
                    {
                    responseType:"json"                
                        })
                    
                }
            

            getEstado(siglaEstado){
                
                return this.http.get(
                    API_CONFIG.baseUrl+"/states/"+siglaEstado,
                    
                    
                    {
                    responseType:"json"                
                        })
                    
                }
            
        

    insertAdress(obj) {
            let token = this.storage.getLocalUser().token;
            let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
            
            return this.http.post(
                API_CONFIG.baseUrl+"/adress/",
                obj,
                {headers:authHeader,
                responseType:'json',
                observe:'response'})
                
            }

            updateAdress(obj){
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.put(
                    API_CONFIG.baseUrl+"/adress/",
                    obj,
                    {headers:authHeader,
                    responseType:'json',
                    observe:'response'})
                    
                }

            deleteAdress(id:number) {
                let token = this.storage.getLocalUser().token;
                let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                
                return this.http.delete(
                    API_CONFIG.baseUrl+"/adress/"+id,
                    {headers:authHeader,
                    responseType:'json',
                    observe:'response'})
                    
                }

                findAdressById(id:number): any{
                    let token = this.storage.getLocalUser().token;
                    let authHeader = new HttpHeaders({'Authorization':'Bearer '+token})
                    
                    return this.http.get(
                        API_CONFIG.baseUrl+"/adress/"+id,
                        
                        {headers:authHeader,
                        responseType:'json'})
                        
                    }
            
        }

