import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

 
 
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
 
    constructor(public storage: StorageService,
         public alertController: AlertController,
         public router:Router){ }
 
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req)
                .pipe(
                    catchError(error => {
                        
                       if( !error.status ){
                            error = JSON.parse(error);
                        }

                        switch(error.status){
                            case 500:
                                this.handle500();
                                this.router.navigateByUrl('introduction-page')
                                break;
                        
                        }
                     
 
                        return throwError(error);
                    })) as any;
    }
 
 
async handle500(){
        this.storage.setLocalUser(null);
        const alert = await this.alertController.create({
            header: 'Falha na obtenção de dados',
            message: "O servidor está indísponivel, "+
            "tente novamente mais tarde",
            buttons: ['OK']
          });
      
          await alert.present();
    }


}

 
export interface FieldMessage {
    fieldName : string;
    message : string;
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};