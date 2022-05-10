import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { AdressService } from 'src/app/services/domain/adress.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { ProductService } from 'src/app/services/domain/product.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { ModalAdressPage } from '../modal-adress/modal-adress.page';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.page.html',
  styleUrls: ['./search-details.page.scss'],
})
export class SearchDetailsPage implements OnInit {
  restaurants;
  products;
  restaurants_last_save;
  products_last_save;
  showSkeleton: boolean;
  filterByPriceVisible:boolean;
  filterByDeliveryFreeVisible:boolean;
  touched: boolean;
  public adress;
  constructor(
    public productService:ProductService,
    public router:Router,
    public global:GlobalService,
    public adressService:AdressService,
    public modalCtrl:ModalController,
    public alertController:AlertController,
    public storeService:StoreService,
    public avalationService:AvaliationService
  ) { }

  ngOnInit() {
  }
   compare( a, b ) {
    if ( a.valor_por < b.valor_por ){
      return -1;
    }
    if ( a.valor_por > b.valor_por ){
      return 1;
    }
    return 0;
  }

  filterByPrice(){
    this.restaurants=null;
    this.products=this.products.sort( this.compare );    
    alert("Filtro por preço ativado")
    this.filterByPriceVisible=true;
  }
  
  disableFilterByPrice(){
    this.restaurants=this.restaurants_last_save;
    this.products=this.products_last_save;
    alert("Filtro por preço desativado")
    this.filterByPriceVisible=false;
  }
  
  disableFilterFreeDelivery(){
    alert("Filtro por delivery desativado")
    this.restaurants=this.restaurants_last_save;
    this.products=this.products_last_save;
    this.filterByDeliveryFreeVisible=false;
  }
  
  
  filterByFreeDelivery(){
    alert("Filtro por delivery ativado")
    this.products=null;
    this.restaurants= this.restaurants.filter(restaurant => restaurant.entrega_gratis == 0);

    this.filterByDeliveryFreeVisible=true;
    

  }

  async goRestaurant(page:{id:string,fechado:boolean}){
  
    if(page.fechado==true){
      const alert = await this.alertController.create({
        header: 'Erro',
        message: "Restaurante fechado",
        buttons: ['OK']
      });
    
      await alert.present();
      this.global.idStoreSelected=page.id;

      // this.getAdressAndContinue()
      this.router.navigateByUrl('store-details')
     
    }else{
      
      this.global.idStoreSelected=page.id;
      
      // this.getAdressAndContinue()
      this.router.navigateByUrl('store-details')
    }
   
  }

  search(ev: any) {
    this.touched = false;
    this.restaurants = [];
    this.showSkeleton = true;
    this.filterByDeliveryFreeVisible=false;
    this.filterByPriceVisible=false;
    //Itens Search
    this.productService.findByName(ev.target.value).subscribe((prods) => {
      if (prods.length <=0 ) {
         this.touched = true;
      } else {
        this.touched = false;
      }

      this.showSkeleton = false;
      this.products = prods;
      this.products_last_save=this.products;
    }, err => console.log(err));

       this.storeService.findByName(ev.target.value).subscribe((prods) => {
      if (prods.length <=0 ) {
         this.touched = true;
      } else {
        this.touched = false;
      }

      this.showSkeleton = false;
      this.restaurants = prods;
      this.restaurants.map((res)=>{
     
        this.avalationService.getMedia(res.id).
        subscribe(r=>{
          
          res.estrela=r.body;
   
        })
      
     
         })

         this.restaurants_last_save=this.restaurants;

     
    }, err => console.log(err));

    
  }

  convertStars(value:number){
    
    let v = Number(value).toFixed(1)

    return v.toString();

   }

  convertCurrency(value:number){
    return value.toString().replace('.',',');

   }

   async goDetails(product,id){
  
  if(product.empresa_id==null){
  
    const alert = await this.alertController.create({
      header: 'Erro',
      message: "Oops! este produto não está vinculado ao nosso sistema",
      buttons: ['OK']
    });
  
    await alert.present();
  }else{
    this.global.idStoreSelected=product.empresa_id;
    this.getAdressAndContinue(product,id)
    
    
  }
    
   }

   getAdressAndContinue(product,id){
    this.adressService.findAll()
    .subscribe(response =>{
        
    
     this.adress=response;
     if(this.isEmpty(this.adress)){
      this.createAdress()
      }else{
        this.global.fromSearch=true;
        this.productService.setNavData(product);
        this.router.navigate(['product-details/'+id])
      }
     
    },
    error=>{ 
      console.log(error)
    })
  }


  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


async createAdress() {
  const modal = await this.modalCtrl.create({
    component: ModalAdressPage,
    animated: true,
    swipeToClose:true,
    keyboardClose:false,
    mode: 'ios',
    backdropDismiss: false,
    cssClass: 'adress-modal',
  })

  return await modal.present();
}


}
