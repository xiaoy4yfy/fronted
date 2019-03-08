import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';



@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }

  tempUrl: string = 'http://192.168.131.240:8080';
  temPId: string = 'c-ld79f:p-kq5gz';
  temCId: string = 'c-ld79f';

  timesClk(data){
    if(data){
      return moment.unix( data/1000).utcOffset(8).format('YYYY-MM-DD HH:mm');
    }else {
      return '';
    }
  }

}
