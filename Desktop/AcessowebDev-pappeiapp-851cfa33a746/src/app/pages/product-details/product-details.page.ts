import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { NotificationInterceptor } from 'src/app/interceptors/notifications-interceptor';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/domain/product.service';
import { StorageService } from 'src/app/services/storage.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  
public id;
public item;
public valueRange=1;
public observation;

  constructor(
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    public data:DataService,
    public toast:ToastController,
    public productService:ProductService,
    public cartService:CartService,
    public notification:NotificationInterceptor,
    public global:GlobalService,
    public loadingController:LoadingController,
    public storage: StorageService,
    public alertController:AlertController) {
    
    this.ActivatedRoute.paramMap.subscribe(
      (data)=>{
        this.id=Number(data.get('id'))
      }
    )
   }

   async presentToast() {
    const toast = await this.toast.create({
      message: 'Item adicionado no carrinho',
      duration: 2000
    });
    toast.present();
  }



  async ngOnInit() {
    if(this.storage.getLocalUser()!=null){
      this.notification.verifyDelivery();
   
   }
    let product =[]
    product.push(this.productService.getNavData())
    this.item=product;
    
  }

 
  convertCurrency(value:number){
    return value.toString().replace('.',',');

   }  

  addCart(){
   let item ={
     empresa_id:this.global.idStoreSelected,
     name:this.item[0].nome,
     product_id:this.item[0].id,
     quantity:this.valueRange,
     image:this.item[0].imagem,
     observation:this.observation,
     price:this.item[0].valor_por,
     totalItem:0
   }
   if(this.storage.getLocalUser()!=null){
    this.cartService.addItemInCart(item)
    this.router.navigateByUrl('store-details');
  }else{
   
    this.alertCreateAccountAlternative();
  }


 
   
   
  }

  async alertCreateAccountAlternative() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Opa!',
      message: 'É preciso que você faça o login na sua conta para fazer pedidos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Criar Conta',
          handler: () => {
            this.router.navigateByUrl('create-user-screen-alt');

          },
        },
        {
          text: 'Fazer login',
          handler: () => {
            this.router.navigateByUrl('login-user-alt');
          },
        },
      ],
    });

    await alert.present();
  }

  addItem() {
    
   this.valueRange+=1;
  }

  removeItem() {
    this.valueRange-=1;
  }

 

  setRange(event){
    this.valueRange=event.detail.value
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


}

export interface itemToCart {
  id: number,
  name: string,
  image: string,
  quantity:number,
  describe:string,
  price:string,
  restaurant_id:number
}
