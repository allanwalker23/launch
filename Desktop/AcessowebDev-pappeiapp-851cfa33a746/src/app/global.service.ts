import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
public emailFacebook='';
public nameFacebook='';
public idStoreSelected=null;
public optionSelected=null;
public bandeiraSelected=null;
public imageBandeiraSelected=null;
public idOrderSelected=null;
public idSegmentSelected=null;
public nameSegmentSelected=null;
public taxaEntrega=null;
public starsRestaurant=null;
public nomeRestaurant='';
public imageRestaurant='';
public timeRestaurant=0;
public raioRestaurant=null;
public fromPromotion=false;
public fromSearch=false;
public dayServer=null;
public idEditAdress=0;

  constructor() { }
}