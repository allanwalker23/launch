import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { CartService } from 'src/app/services/cart/cart.service';
import { AdressService } from 'src/app/services/domain/adress.service';
import { AvaliationService } from 'src/app/services/domain/avaliations.service';
import { ProductService } from 'src/app/services/domain/product.service';
import { PromotionsService } from 'src/app/services/domain/promotions.service';
import { RaioService } from 'src/app/services/domain/raio.service';
import { StoreService } from 'src/app/services/domain/store.service';
import { UserService } from 'src/app/services/domain/user.service';
import { DataService } from '../../services/data.service';
import { ModalAdressPage } from '../modal-adress/modal-adress.page';
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.page.html',
  styleUrls: ['./store-details.page.scss'],
})
export class StoreDetailsPage implements OnInit {
public showNull=true;  
public id:number;
public restaurant;
public promotions=[];
public products=[];
public itemsInCart=0;
public stars;
public nomeRestaurant='';
public imageRestaurant='';
public timeRestaurant=0;
public raioRestaurant;
public btnColor="dark"
class='';
option = {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  autoplay:true,
}
  constructor(
    private ActivatedRoute:ActivatedRoute,
     private data:DataService,
     private router:Router,
     public productService:ProductService,
     public storeService:StoreService,
     public cartService:CartService,
     public notification:NotificationInterceptor,
     public global:GlobalService,
     public alertController:AlertController,
     public loadingController:LoadingController,
     public avalationService:AvaliationService,
     public raioService:RaioService,
     public promotionService:PromotionsService,
     public userService:UserService,
     public adressService:AdressService,
     public modalCtrl:ModalController) {


   }

   convertMinutes(horas:string):number{
     
    let aux;
    aux = horas.split(":")
    let minutos=((Number(aux[0])*60)+Number(aux[1]));
    return minutos
   }


  convertStars(value:number){
    
    let v = Number(value).toFixed(1)

    return v.toString();

   }


   ngOnInit(){
     
    this.loadingContents();
    this.promotionService.findAll()
    .subscribe(r=>{
      this.promotions=r;
    })
  
    //this.timeRestaurant=this.global.timeRestaurant;
    //this.raioRestaurant=this.global.raioRestaurant || '';
    //this.stars=this.global.starsRestaurant;

    this.storeService.findById(this.global.idStoreSelected)
    .subscribe(restaurant=>{
      this.avalationService.getMedia(restaurant.id).
      subscribe(r=>{
        console.log(r.body)
        this.stars=r.body;
 
      })

      this.raioService.findAll(restaurant.raio_id)
      .subscribe(response =>{
        this.raioRestaurant=response.raio
        console.log(this.raioRestaurant)
        
      })
    this.timeRestaurant=this.convertMinutes(restaurant.tempo_entrega)  
    this.nomeRestaurant=restaurant.nome;
    this.imageRestaurant=restaurant.logo;
    this.global.taxaEntrega=restaurant.taxa_entrega;
    })

    this.productService.findById(this.global.idStoreSelected)
    .subscribe(response=>{
        this.products=response
        if(!this.isEmpty(this.products)){
          this.showNull=false;
        }
    })

  //  this.restoreRestaurant();
    
   }

  ionViewWillEnter() {
    this.verifyEqualsStore();
    this.notification.verifyDelivery();
    this.restoreItemsInCart();
    
    
  /*   
    
    let identificator = this.id;
    let star="";
    let getRestaurant= this.data.getRestaurants();
    let restaurantI = [];
       getRestaurant.map(function(restaurant){
      if(restaurant.id==identificator){
   
        restaurantI.push(restaurant)
        star=restaurant.star;
        
      }else{
       
      }
    })
    this.infoRestaurant=restaurantI;
    this.restoreInfo=restaurantI;
    this.stars=star;
   
    
    let promotions = [];
    let getPromotions= this.data.getPromotionsRestaurant();
      getPromotions.map(function(restaurant){
      if(restaurant.restaurant_id==identificator){
      
        promotions.push(restaurant)
      }else{
       
      }
    })
    this.promotions=promotions;
        
    let products = [];
    let getProducts= this.data.getProductsRestaurant();
      getProducts.map(function(product){
      if(product.restaurant_id==identificator){
      
        products.push(product)
      }else{
       
      }
    })
    this.products=products;
    
    this.itemsInCart=this.data.getItemsInCart().length;
    
    */

  }

  goDetails(product,id){
    
    this.productService.setNavData(product);
    this.router.navigate(['product-details/'+id])
   }

   goHome(){
     this.router.navigateByUrl('feed')
   }

   async goCart(){
    await this.getAdressAndContinue()
  
  
    
   }

  async getAdressAndContinue(){
    return this.adressService.findAll()
       .subscribe(async response => {
         console.log(response);


         if (this.isEmpty(response)) {
          const alert = await this.alertController.create({
            header: 'Aviso',
            message: 'Adicione um endereço para fazer pedidos ;)',
            buttons: ['OK']
          });
        
          await alert.present();
          this.router.navigateByUrl('adress')
           
         } else {
          this.userService.findAll()
          .subscribe(async Response=>{
            
            if(Response.cpf){
              this.router.navigateByUrl('cart-details')
    
            }else{
           
              const alert = await this.alertController.create({
                header: 'Aviso',
                message: 'Preencha todos os seus dados para fazer pedidos ;)',
                buttons: ['OK']
              });
            
              await alert.present();
              this.router.navigateByUrl('profile')
            }
            
          })
         
         }

       },
         error => {
           console.log(error);
         });
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

   goAvaliations(){
    
    this.router.navigateByUrl('avaliation-store')
   }

   Scroll(e){
     
    if(e.detail.scrollTop>10){
      
      
      this.imageRestaurant==null
      this.class="shrink";
      this.btnColor="light"
      
    
    }else{
      this.btnColor="dark"
      this.class='';  
      
    }

   }


   restoreRestaurant(){
    try{
      let nome=this.storeService.getNavData();
        
        for(let i=0;i<=nome.length;i++){
          
          if(nome[i].id==this.id){
          this.restaurant=nome[i]          
         
            
          }
         
        }
    }catch(err){
      
    }
   }

   restoreItemsInCart(){
    const items= this.cartService.getItemsInCart();
    this.itemsInCart=items.length;

   }
   convertCurrency(value:number){
    return value.toString().replace('.',',');

   }

   verifyEqualsStore(){
    const items= this.cartService.getItemsInCart();
    
      if(items[0].empresa_id!=this.global.idStoreSelected){
        this.presentCleanConfirm();
        return false;
      }else{
        return true
      }
    
   }

   async presentCleanConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oops!',
      message: 'Você precisa limpar seu carrinho antes de prosseguir',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigateByUrl('feed')
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.cartService.cleanAllItensInCart();
            this.itemsInCart=0;
            this.ionViewWillEnter()
          }
        }
      ]
    });
    await alert.present();


  }

  async loadingContents() {
    const loading = await this.loadingController.create({
      cssClass: 'login-modal',
      message: 'Carregando...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  public isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
}