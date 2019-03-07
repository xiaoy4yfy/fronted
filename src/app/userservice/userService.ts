import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }

  tempUrl: string = '/public';
  temPId: string = 'c-ld79f:p-kq5gz';
  temCId: string = 'c-ld79f';


}
