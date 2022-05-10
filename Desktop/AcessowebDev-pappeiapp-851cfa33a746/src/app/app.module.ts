import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { UserService } from './services/domain/user.service';
import { DatePipe } from '@angular/common';
import { AuthService } from './services/auth.services';
import { CartService } from './services/cart/cart.service';
import { AdressService } from './services/domain/adress.service';
import { CardService } from './services/domain/cards.service';
import { OperationService } from './services/domain/operation.service';
import { OptionPaymentService } from './services/domain/option.payment.service';
import { OrdersService } from './services/domain/orders.service';
import { ProductService } from './services/domain/product.service';
import { RaioService } from './services/domain/raio.service';
import { SegmentService } from './services/domain/segments.service';
import { StoreService } from './services/domain/store.service';
import { StorageService } from './services/storage.service';
import { CepService } from './services/viacep-api/cep.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationInterceptor } from './interceptors/notifications-interceptor';
import { ErrorInterceptor, ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { AuthInterceptor, AuthInterceptorProvider } from './interceptors/authInterceptor';
import { PromotionsService } from './services/domain/promotions.service';
import { AvaliationService } from './services/domain/avaliations.service';
import { NotificationService } from './services/domain/notifications.service';
import { PagSeguroService } from './services/domain/pagseguro.service';
import { PasswordService } from './services/domain/password.service';
import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
  HttpClientModule, IonicModule.forRoot(),
  AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    UserService,
    NotificationService,
    AuthService,
    StorageService,
    PromotionsService,
    AdressService,
    AvaliationService,
    StoreService,
    RaioService,
    PasswordService,
    PagSeguroService,
    OperationService,
    ProductService,
    CartService,
    OptionPaymentService,
    CepService,
    SegmentService,
    OrdersService,
    CardService,
    DatePipe,
    LocalNotifications,
    Facebook,
    NotificationInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
