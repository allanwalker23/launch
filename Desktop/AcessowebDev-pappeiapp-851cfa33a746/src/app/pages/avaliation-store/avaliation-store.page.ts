import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { UserService } from 'src/app/services/domain/user.service';

@Component({
  selector: 'app-avaliation-store',
  templateUrl: './avaliation-store.page.html',
  styleUrls: ['./avaliation-store.page.scss'],
})
export class AvaliationStorePage implements OnInit {
public avaliation;
public stars=0;
public quantityAvaliations=0;
public user;
public store;
  constructor(
    public avaliationService:AvaliationService,
    public userService:UserService,
    public storeService:StoreService,
    public global:GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.avaliationService.findByStore(this.global.idStoreSelected)
    .subscribe(r=>{
      this.avaliation=r;
      
      r.map((avaliation)=>{
        this.quantityAvaliations++;
        
        this.userService.findUserById(avaliation.cliente_id)
        .subscribe(r=>{
          avaliation.user=r;
          console.log(this.user)
        })
      })

      r.map((avaliation)=>{
        this.storeService.findById(avaliation.empresa_id)
        .subscribe(r=>{
          avaliation.store=r
        })
      })
    })
  }
  


}
