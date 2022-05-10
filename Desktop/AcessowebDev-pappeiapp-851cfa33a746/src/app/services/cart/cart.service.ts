import { Injectable } from '@angular/core';

export interface itemToCart {
    id: number,
    name: string,
    image: string,
    quantity:number,
    observation:string,
    price:string,
    restaurant_id:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
public itemsInCart=[];


    addItemInCart(item){
        
        this.itemsInCart.push(item)
        
    }

    getItemsInCart(){
        return this.itemsInCart;
    }

    cleanAllItensInCart(){
        this.itemsInCart=[]
    }

  



}
