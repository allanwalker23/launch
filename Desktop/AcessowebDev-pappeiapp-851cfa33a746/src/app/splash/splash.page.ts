import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.services';
import { OperationService } from '../services/domain/operation.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    public router:Router,
    public auth:AuthService,
    public operationService:OperationService,
    public global:GlobalService
  ) { 
    setTimeout(()=>{

      this.auth.verifyToken()
    },3000);
  }

  async ngOnInit() {
   await this.operationService.getHoursAndMinutes()
    .subscribe(response =>{
    let aux
    aux=response;
    this.global.dayServer=aux.day;
    
    })
  }

}
