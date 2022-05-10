import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-credit-card-avalaible',
  templateUrl: './credit-card-avalaible.page.html',
  styleUrls: ['./credit-card-avalaible.page.scss'],
})
export class CreditCardAvalaiblePage implements OnInit {
  public bandeiraSelected;
  constructor(
    public global:GlobalService,
    public router:Router) { 
    
  }
public cards= [
  {
      id:1,
      name:"American Express",
      image:"https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_american_express_card-512.png"
  },
  {
      id:2,    

      name:"Elo",
      image:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052015/elo_0.png?itok=VDjAtea4"
  },
  {
      id:3,
      name:"MasterCard",
      image:"http://www.bh1.com.br/wp-content/uploads/2018/05/logomarca-mastercard.gif"
  },
  {
      id:4,
      name:"Visa",
      image:"https://imagens.canaltech.com.br/empresas/4214.400.jpg"
  },
  { 
      id:5,
      name:"Cabal",
      image:"https://seeklogo.com/images/C/cabal-logo-20221A55B5-seeklogo.com.png"
  },
  {   
      id:6,
      name:"Diners",
      image:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072013/dci-logo-stacked.eps-converted.png?itok=Nv6-SD-A"
  },
  {   id:7,

    name:"HiperCard",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/1200px-Hipercard_logo.svg.png"
  },
  {
      id:8,
      name:"Grand Card",
      image:"https://www.grandcard.com.br/grandcard/logo_novo.png"
  },
  {
      id:9,
      name:"Banese Card",
      image:"https://sistemaserveloja.com.br/Sistema/App_Content/img/icons_bandeiras/icon_banesecard.svg"
    
  },
  {
      id:10,
      name:"Aura",
      image:"https://seeklogo.com/images/A/aura-logo-3C65F54B9F-seeklogo.com.png"
    
  },
  { 
      id:11,
      name:"Brasil Card",
      image:"https://www.aciasgra.com.br/wp-content/uploads/2020/08/brasil-card.jpg"
  }
]

  

  ngOnInit() {
    
  }

  selectCreditCard(){


    this.global.bandeiraSelected= this.bandeiraSelected.substr(0,this.bandeiraSelected.indexOf(","));
    this.global.imageBandeiraSelected=this.bandeiraSelected.substr(this.bandeiraSelected.indexOf(",")+1);
    
    this.router.navigateByUrl('create-credit-card')

  }

}
