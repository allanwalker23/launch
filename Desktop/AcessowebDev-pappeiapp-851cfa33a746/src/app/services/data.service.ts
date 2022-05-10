import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IPromotion {
  id: number,
  name: string,
  image: string,

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

@Injectable({
  providedIn: 'root'
})
export class DataService {
public itemsInCart=[];
public adressList=[];
public creditCardList=[];
  constructor() { }

  getCategories() {
    let categories = [
        {
            id: 1,
            name: 'Açai',
            image: 'assets/images/category1.jpg'
        },
        {
            id: 2,
            name: 'Boloes e doces',
            image: 'assets/images/category2.png'
        },
        {
            id: 3,
            name: 'Salgados',
            image: 'assets/images/category3.png'
        },
        {
            id: 4,
            name: 'Pizzas',
            image: 'assets/images/category4.png'
        },
        
    ];

    return categories;

  }

    getPromotions(){
        let promotions =[];

        let prom1: IPromotion ={
            id:1,
            name:'Sexta feira Do Açai',
            image:'assets/images/promotion-principal-1.png',
        }

        let prom2: IPromotion ={
            id:2,
            name:'Sexta feira Do Hambuguer',
            image:'assets/images/promotion-principal-2.jpg'
        }

        let prom3: IPromotion ={
            id:3,
            name:'Sexta feira Do SUSHI',
            image:'assets/images/promotion-principal-3.jpg'
        }

        let prom4: IPromotion ={
            id:4,
            name:'Sexta feira Do TEMAKI',
            image:'assets/images/promotion-principal-4.png'
        }

        let prom5: IPromotion ={
            id:5,
            name:'Sexta feira 4 Queijos',
            image:'assets/images/promotion-principal-5.png'
        }

        let prom6: IPromotion ={
            id:6,
            name:'Sexta feira Da Fruta',
            image:'assets/images/promotion-principal-6.png'
        }

        promotions.push(prom1,prom2,prom3,prom4,prom5,prom6);
        return promotions;

    }
    getRestaurants(){
        let restaurants = [
            {
                id: 1,
                name: 'Restaurante Tamashiro',
                image: 'assets/images/restaurant1.jpg',
                category:'Japonesa',
                tempoMin:'30',
                tempoMax:'40',
                distancia:'3.5',
                slogan:'Pensou em JAPA, pensou em TAMASHIRO',
                star:"4.0",
                aberto:true

            },
            {
                id: 2,
                name: 'Restaurante Dona Florinda',
                image: 'assets/images/restaurant2.jpg',
                category:'Carnes',
                tempoMin:'10',
                tempoMax:'20',
                distancia:'1.5',
                slogan:'Gostaria de entrar para tomar um xícara de café?',
                star:"4.5",
                aberto:true
            },
            {
                id: 3,
                name: 'Restaurante Berço do Samba',
                image: 'assets/images/restaurant3.jpg',
                category:'Brasileira',
                tempoMin:'20',
                tempoMax:'40',
                distancia:'2.0',
                slogan:'Sinta o sabor da verdadeira essência brasileira',
                star:"3.5",
                aberto:false
            },
            {
                id: 4,
                name: 'Restaurante Fogo Na Grelha',
                image: 'assets/images/restaurant4.jpg',
                category:'Buffet',
                tempoMin:'40',
                tempoMax:'55',
                distancia:'4.0',
                slogan:'Fogo na grelha, o melhor buffet do rio',
                star:"3.0",
                aberto:false

            }
            
            
        ];
    
        return restaurants;
    }

    getPromotionsRestaurant(){
        let promotions = [
            {
                id: 1,
                name: 'Promoção Arroz Piamontese 16R$',
                image: 'assets/images/promotion-restaurant1.jpg',
                restaurant_id:2,

            },
            {
                id: 2,
                name: 'Promoção Bife a Cavala 15R$',
                image: 'assets/images/promotion-restaurant2.jpg',
                restaurant_id:2,
            },
            {
                id: 3,
                name: 'Promoção Arroz +Fritas 13R$',
                image: 'assets/images/promotion-restaurant3.jpg',
                restaurant_id:2,
            },
            {
                id: 4,
                name: 'Promoção 2 Temaki 15R$',
                image: 'assets/images/promotion-restaurant6.jpg',
                restaurant_id:1,
            },
            {
                id: 5,
                name: 'Promoção Sushi 1 Real',
                image: 'assets/images/promotion-restaurant4.jpg',
                restaurant_id:1,
            },
            {
                id: 6,
                name: 'Combo Shashimi 15R$',
                image: 'assets/images/promotion-restaurant6.jpg',
                restaurant_id:1,
            }
            
            
        ];
    
        return promotions;
    }

    getProductsRestaurant(){
        let products = [
            {
                id: 1,
                name: 'Sushi Salmão',
                image: 'assets/images/product1.jpg',
                quantity:6,
                describe:'salmão,arroz,cream chesse,gergelim',
                price:19.99,
                restaurant_id:1,

            },
            {
                id: 2,
                name: 'Temaki Salmão',
                image: 'assets/images/product2.jpg',
                quantity:1,
                describe:'salmão,cream chesse,gergelim,shoyu',
                price:7.99,
                restaurant_id:1,
            },
            {
                id: 3,
                name: 'Uramaki Salmão',
                image: 'assets/images/product3.jpg',
                quantity:12,
                describe:'salmão,arroz,cream chesse,gergelim',
                price:19.99,
                restaurant_id:1,
            },
            {
                id: 4,
                name: 'Feijoada + 1 Refrigerante',
                image: 'assets/images/product4.jpg',
                quantity:1,
                describe:'Uma deliciosa feijoada + 1 garrafa de Coca Cola,',
                price:25.99,
                restaurant_id:2,
            },
            {
                id: 5,
                name: 'Arroz com Strogonoff + Suco',
                image: 'assets/images/product5.jpg',
                quantity:'1',
                describe:'Acompanha batata palha + arroz + garrafa de suco DellVale',
                price:25.99,
                restaurant_id:2,
            },
            {
                id: 6,
                name: 'Salada Pronta',
                image: 'assets/images/product6.jpg',
                quantity:1,
                describe:'Acompanha alface, tomate e cebola',
                price:4.99,
                restaurant_id:2,
            },
            {
                id: 7,
                name: 'Salada Pronta',
                image: 'assets/images/product6.jpg',
                quantity:1,
                describe:'Acompanha alface, tomate e cebola',
                price:4.99,
                restaurant_id:2,
            },
            {
                id: 8,
                name: 'Salada Pronta',
                image: 'assets/images/product6.jpg',
                quantity:1,
                describe:'Acompanha alface, tomate e cebola',
                price:4.99,
                restaurant_id:2,
            },
            
            
            
            
            
        ];
    
        return products;
    }

    getTypesCreditCard(){

        let types = [
            {
                id: 1,
                name: 'Cartão crédito',
                
            },
            {
                id: 2,
                name: 'Cartão débito',
                
            }
        ]

        return types;

    }

    addItemInCart(item){
    alert(JSON.stringify(item))

    
        this.itemsInCart.push(item)
    }

    addAdress(adress){
        this.adressList.push(adress)
    }

    addCreditCard(credit){
        
        this.creditCardList.push(credit)
    }

    getListAdress(){
        return this.adressList;
    }

    getItemsInCart(){
        return this.itemsInCart;
    }

    getListCreditCard(){
        return this.creditCardList;
    }



}
