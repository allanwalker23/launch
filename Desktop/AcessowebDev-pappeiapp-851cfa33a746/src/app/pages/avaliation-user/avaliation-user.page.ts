import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { UserService } from 'src/app/services/domain/user.service';

@Component({
  selector: 'app-avaliation-user',
  templateUrl: './avaliation-user.page.html',
  styleUrls: ['./avaliation-user.page.scss'],
})
export class AvaliationUserPage implements OnInit {
public user;
public store=[];
public avaliation;
public showNull=true;
constructor(
    public avaliationService:AvaliationService,
    public userService:UserService,
    public storeService:StoreService,
    public global:GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.avaliationService.findByUser()
    .subscribe(r1=>{
      this.avaliation=r1;

      if(!this.isEmpty(this.avaliation)){
        this.showNull=false;
      }

      r1.map((avaliation)=>{
        this.storeService.findById(avaliation.empresa_id)
        .subscribe(r2=>{
          console.log(r2.nome)
          avaliation.store=r2.nome;
          
        })
      })

      r1.map((avaliation)=>{
        console.log(avaliation)
        this.userService.findUserById(avaliation.cliente_id)
        .subscribe(r2=>{
          this.user=r2
        })
      })

    
    })
    
  }
  
  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}
