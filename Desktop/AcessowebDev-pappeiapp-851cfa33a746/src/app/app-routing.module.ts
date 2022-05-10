import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction-page',
    pathMatch: 'full'
  }, {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'store-details',
    loadChildren: () => import('./pages/store-details/store-details.module').then( m => m.StoreDetailsPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'cart-details',
    loadChildren: () => import('./pages/cart-details/cart-details.module').then( m => m.CartDetailsPageModule)
  },
  {
    path: 'adress',
    loadChildren: () => import('./pages/adress/adress.module').then( m => m.AdressPageModule)
  },
  {
    path: 'create-adress-ex',
    loadChildren: () => import('./pages/create-adress-ex/create-adress-ex.module').then( m => m.CreateAdressEXPageModule)
  },
  {
    path: 'create-credit-card',
    loadChildren: () => import('./pages/create-credit-card/create-credit-card.module').then( m => m.CreateCreditCardPageModule)
  },
  {
    path: 'credit-card',
    loadChildren: () => import('./pages/credit-card/credit-card.module').then( m => m.CreditCardPageModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./pages/session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'method-payments',
    loadChildren: () => import('./pages/method-payments/method-payments.module').then( m => m.MethodPaymentsPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'credit-card-avalaible',
    loadChildren: () => import('./pages/credit-card-avalaible/credit-card-avalaible.module').then( m => m.CreditCardAvalaiblePageModule)
  },
  {
    path: 'introduction-page',
    loadChildren: () => import('./pages/introduction-page/introduction-page.module').then( m => m.IntroductionPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./pages/register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'segments',
    loadChildren: () => import('./pages/segments/segments.module').then( m => m.SegmentsPageModule)
  },
  {
    path: 'avaliations',
    loadChildren: () => import('./pages/avaliations/avaliations.module').then( m => m.AvaliationsPageModule)
  },
  {
    path: 'avaliation-user',
    loadChildren: () => import('./pages/avaliation-user/avaliation-user.module').then( m => m.AvaliationUserPageModule)
  },
  {
    path: 'avaliation-store',
    loadChildren: () => import('./pages/avaliation-store/avaliation-store.module').then( m => m.AvaliationStorePageModule)
  },
  {
    path: 'search-details',
    loadChildren: () => import('./pages/search-details/search-details.module').then( m => m.SearchDetailsPageModule)
  },
  {
    path: 'notifications-details',
    loadChildren: () => import('./pages/notifications-details/notifications-details.module').then( m => m.NotificationsDetailsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'modal-adress',
    loadChildren: () => import('./pages/modal-adress/modal-adress.module').then( m => m.ModalAdressPageModule)
  },
  {
    path: 'edit-adress',
    loadChildren: () => import('./pages/edit-adress/edit-adress.module').then( m => m.EditAdressPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'create-user-screen-alt',
    loadChildren: () => import('./pages/create-user-screen-alt/create-user-screen-alt.module').then( m => m.CreateUserScreenAltPageModule)
  },
  {
    path: 'login-user-alt',
    loadChildren: () => import('./pages/login-user-alt/login-user-alt.module').then( m => m.LoginUserAltPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
