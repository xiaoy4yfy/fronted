import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpClient} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {NzMessageService} from 'ng-zorro-antd';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage: LocalStorageService, private http: HttpClient, private  message: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {

            if(event.body.status === 'error'){
              alert(event.body.message);
            }
          }
        },
        error => {

        }
      ),
      finalize(() => {

      })
    );
  }
}
